<?php

include 'config.php';


$sql = "SELECT * FROM sensor_box_1";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // สร้าง array หรือ object เพื่อเก็บข้อมูลที่ได้จาก MySQL
    $data = array();

    // วน loop เพื่อดึงข้อมูลแต่ละแถวในตาราง
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}


?>