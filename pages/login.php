<?php

include '../config.php';

if (isset($_POST['username']) && isset($_POST['password'])) {
    // รับข้อมูลจากฟอร์มล็อกอิน
    $username = $_POST['username'];
    $password = $_POST['password'];

    // ค้นหาผู้ใช้ในฐานข้อมูล
    $sql = "SELECT * FROM users WHERE username='$username' AND pass='$password'";
    $result = $conn->query($sql);

    // ตรวจสอบว่ามีผลลัพธ์หรือไม่
    if ($result->num_rows > 0) {
        // ล็อกอินสำเร็จ
        echo "ล็อกอินสำเร็จ!";
    } else {
        // ล็อกอินไม่สำเร็จ
        echo "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
    }
}else {
    header("Location: login.html");
}

?>