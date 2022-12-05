<!-- php for saving cart from frontend to backend -->
<!-- save information to orders_row database, with order_id and product_id -->
<!-- save information to orders database, with order_id and user_id -->

<?php
session_start();
include 'db.php';
include 'functions.php';
// get user_id from session
$user_id = $_SESSION['user_id'];
// get order_id from session
$order_id = $_SESSION['order_id'];
// get product_id from session
$product_id = $_SESSION['product_id'];
// get quantity from session
$quantity = $_SESSION['quantity'];
// get price from session
$price = $_SESSION['price'];
// get total from session
$total = $_SESSION['total'];
// get date from session
$date = $_SESSION['date'];
// get time from session
