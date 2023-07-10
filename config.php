<?php
$servername = "127.0.0.1";
$username = "thanankornm";
$password = "BrqHAmTC3w_ZRCut";
$database = "smartfarm";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "การเชื่อมต่อสำเร็จ";
} catch(PDOException $e) {
    echo "การเชื่อมต่อล้มเหลว: " . $e->getMessage();
}

$conn = null;
?>