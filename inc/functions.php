<?php

//jos tarvii toisenlaiseen tietokantaa yhteyden:
/* function createDbConnection() {
    $ini = parse_ini_file("../config.ini", true);

    $host = $ini["host"];
    $database = $ini["database"];
    $user = $ini["user"];
    $password = $ini["password"];

    $db = new PDO("mysql:host=$host;dbname=$database:charset=utf8", $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
} */

function createSqliteConnection($filename){
    try{
        $db = new PDO('sqlite:'.$filename);
        return $db;
    }catch(PDOException $e){
        echo $e->getMessage();
    }
    return null;
}

 function selectAsJson(object $db, string $sql): void {
    $query = $db->query($sql);
    $results = $query->fetchAll(PDO::FETCH_ASSOC);
    header('HTTP/1.1 200 OK');
    echo json_encode($results);
} 

 function executeInsert(object $db, string $sql): int {
    $query = $db->query($sql);
    return $db->lastInsertId();
} 

 function returnError(PDOException $pdoex): void {
    header('HTTP/1.1 500 Internal Server Error');
    $error = array('error' => $pdoex->getMessage());
    echo json_encode($error);
    exit;
}