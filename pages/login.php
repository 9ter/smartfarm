<?php

include '../config.php';

$myusername = $_POST['username'];

$mypassword = $_POST['pass'];


if(!isset($_POST['username'])  && !isset($_POST['pass'])){
    header("Location: login.html");
}

$sql = "SELECT id FROM admin WHERE username = '$myusername' and passcode = '$mypassword'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // ล็อกอินสำเร็จ
    echo "ล็อกอินสำเร็จ!";
} else {
    // ล็อกอินไม่สำเร็จ
    echo "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
}

?>