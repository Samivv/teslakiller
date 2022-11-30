<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$name = $_GET['name'];
$name = filter_var($name, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
try {
    $db = createSqliteConnection("../allset.db");
    $sql = "insert into category (category_name) values ('$name')";
    $query = $db->query ($sql);
    $data = array('id' => $db->lastInsertId(), 'name' => $name);
    header('HTTP/1.1 200 OK');
    echo json_encode($data);
} catch (PDOException $pdoex) {
        returnError($pdoex);
}


?>



