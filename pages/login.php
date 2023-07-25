<?php

$servername = "localhost";
$username = "thanankornm";
$password = "BrqHAmTC3w_ZRCut";
$dbname = "smartfarm";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['username']) && isset($_POST['pass'])) {
    // รับข้อมูลจากฟอร์มล็อกอิน
    $username = $_POST['username'];
    $password = $_POST['pass'];

    // ค้นหาผู้ใช้ในฐานข้อมูล
    $sql = "SELECT * FROM users WHERE username='$username' AND pass='$password'";
    $result = $conn->query($sql);

    // ตรวจสอบว่ามีผลลัพธ์หรือไม่
    if ($result->num_rows > 0) {
        // ล็อกอินสำเร็จ
        echo "ล็อกอินสำเร็จ!";
        header("Location: ../index.php");
    } else {
        // ล็อกอินไม่สำเร็จ
        echo "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
        header("Location: login.html");
    }
}

?>