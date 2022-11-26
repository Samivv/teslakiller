<?php
require '../inc/functions.php';
require '../inc/headers.php';

// Haetaan kaikki tuotteet tuoteryhmän perusteella
$url = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'), PHP_URL_PATH);
$param = explode('/', $url);
$category_id = $param[1];

try {
    $db = createSqliteConnection('../allset.db');
    $sql = "select * from category where category_id = $category_id";
    $query = $db->query($sql);
    $category = $query->fetch(PDO::FETCH_ASSOC);
   
    $sql = "select * from product where category_id = $category_id";
    $query = $db->query($sql);
    $products = $query->fetchAll(PDO::FETCH_ASSOC);

        header('HTTP/1.1 200 OK');
        echo json_encode(array(
            "category" => $category['category_name'],
            "products" => $products
        ));
}
catch (PDOException $pdoex) {
    returnError($pdoex);
}