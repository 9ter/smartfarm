<?php
// ตัวอย่างการเชื่อมต่อกับฐานข้อมูล MySQL
$servername = "localhost";
$username = "thanankornm";
$password = "BrqHAmTC3w_ZRCut";
$dbname = "smartfarm";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// คำสั่ง SQL เพื่อดึงข้อมูลที่ต้องการจากฐานข้อมูล
$sql = "SELECT value FROM sensor_box_1 ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // แปลงข้อมูลเป็นรูปแบบ JSON
    $row = $result->fetch_assoc();
    $data = array('light' => $row['light']);
    echo json_encode($data);
} else {
    // ถ้าไม่พบข้อมูล ส่งค่าเป็น 0
    $data = array('value' => 0);
    echo json_encode($data);
}

$conn->close();
?>