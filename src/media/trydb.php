<?

$hostname = "mysli.oamk.fi";
$dbname = "opisk_n1vasa00";
$password = "5gem3b8yHST9nTHk";
$username = "n1vasa00";

// PDO connection to database (MySQL) with error handling (try-catch)
try {
    $db = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}



