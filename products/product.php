<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$url = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$param = explode('/', $url);
$product_id = $param[1];

try {
  $db = createSqliteConnection('../allset.db');
  selectAsJson($db, "select * from product where product_id = $product_id");
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}