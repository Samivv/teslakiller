<?php
require '../inc/functions.php';
require '../inc/headers.php';

//Haetaan kaikki tiedot category-taulusta jsonina:
try {
    $db = createSqliteConnection('../allset.db');
    selectAsJson($db, 'select * from category');
} catch (PDOException $pdoex) {
    returnError($pdoex);
}