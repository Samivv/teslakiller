<?php

// Tämä koodi on vaan kopio kurssin moodlesta.

require '../inc/functions.php';
require '../inc/headers.php';
$name = filter_var($input->name, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$address = filter_var($input->address, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zipcode = filter_var($input->zipcode, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$city = filter_var($input->city, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$phone = filter_var($input->phone, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_var($input->email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$shoppingcart = $input->shoppingcart;
try {
    $db = createSqliteConnection('../allset.db');
    $db->beginTransaction();
    //Asiakastietojen vieminen tauluun
    $sql = "insert into client (client_name, address, zipcode, city, phone, email) values 
    ('" .
        filter_var($name,FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($address, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($zipcode, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($city, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($phone, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($email, FILTER_SANITIZE_FULL_SPECIAL_CHARS) 
        . "')";
    $client_id = executeInsert($db, $sql);
    $date = date('y-m-d');
    
    //Tilaustietojen vieminen tauluun
    $sql = "insert into orders (client_id, order_date) values ($client_id, $date)";
    $order_id = executeInsert($db, $sql);
    // Tilausrivien looppaaminen
    foreach ($shoppingcart as $product) {
        $sql = "insert into order_row (order_id, product_id) values ("
        . 
        $order_id . "," . 
        $product->product_id 
        . ")";
        executeInsert($db, $sql);
    }
    $db->commit();
    header('HTTP/1.1 200 OK');
    $data = array('id' => $client_id);
    echo json_encode($data); 
}
catch (PDOException $pdoex) {
    $db->rollBack();
    returnError($pdoex);
}