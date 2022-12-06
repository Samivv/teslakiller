<?php
require '../inc/functions.php';
require '../inc/headers.php';

// Asiakkaan lisääminen tietokantaan Input-kentän kautta.

$input = json_decode(file_get_contents('php://input'));

$fullname = filter_var($input->$fullname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$street = filter_var($input->$street, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zipcode = filter_var($input->$zipcode, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$city = filter_var($input->$city, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$phone = filter_var($input->$phone, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_var($input->$email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

try{
    $db = createSqliteConnection('../allset.db');
    $db->beginTransaction();

    $sql = "INSERT INTO client (client_name, street, zipcode, city, phone, email) VALUES ('$fullname', '$address', '$zipcode', '$city', '$phone', '$email')";
    $client_id = executeInsert($db, $sql);

    $query = $db->query ($sql);
    header('HTTP/1.1 200 OK');
    $data = array('id' => $client_id, 'client_name' => $fullname, 'street' => $street, 'zipcode' => $zipcode, 'city' => $city, 'phone' => $phone, 'email' => $email);
    print json_encode($data);
} catch (PDOException $pdoex) {
    $db->rollBack();
    returnError($pdoex);
}