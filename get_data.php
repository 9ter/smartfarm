<?php

include 'config.php';

// คำสั่ง SQL เพื่อดึงข้อมูลที่ต้องการจากฐานข้อมูล
$sql = "SELECT value FROM sensor_box_1 ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);




?>