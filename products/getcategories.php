<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

try {
    $db = createSqliteConnection("../allset.db");
    $sql = "SELECT * FROM category";
    $query = $db->query ($sql);
    $data = $query->fetchAll(PDO::FETCH_ASSOC);
    header('HTTP/1.1 200 OK');
    
} catch (PDOException $pdoex) {
        returnError($pdoex);
}


?>