<?php
require '../inc/functions.php';
require '../inc/headers.php';

// testiksi kaikki tiedot model-taulusta jsonina:
try {
    $db = createSqliteConnection('../allset.db');
    selectAsJson($db, 'select * from model');
} catch (PDOException $pdoex) {
    returnError($pdoex);
}