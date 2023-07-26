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
    // สร้าง array หรือ object เพื่อเก็บข้อมูลที่ได้จาก MySQL
    $data = array();

    // วน loop เพื่อดึงข้อมูลแต่ละแถวในตาราง
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // แปลงข้อมูลในรูปแบบของ PHP array เป็น JSON
    $jsonData = json_encode($data);

    // แสดงผล JSON
    echo $jsonData;
} else {
    // ถ้าไม่พบข้อมูล ส่ง JSON ว่างๆ
    echo json_encode(array());
}

$conn->close();
?>