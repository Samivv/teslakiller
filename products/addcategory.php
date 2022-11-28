<?
require './inc/functions.php';

try {
    $db = createSqliteConnection('../allset.db');
    selectAsJson($db, 'select * from category');
} catch (Exception $e) {
    print $e->getMessage();

}