<?php

include 'config.php';


$sql = "SELECT * FROM sensor_box_1 ORDER BY id DESC LIMIT 1";
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



?>