<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$name = filter_var($input->name,FILTER_SANITIZE_FULL_SPECIAL_CHARS);

try {
    $db = createSqliteConnection("../allset.db");
    $sql = "insert into category (category_name) values ('$name')";
    $query = $db->query ($sql);
    $data = array('id' => $db->lastInsertId(), 'name' => $name);
    header('HTTP/1.1 200 OK');
} catch (PDOException $pdoex) {
        returnError($pdoex);
}


?>



