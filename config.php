<?php
$servername = "localhost";
$username = "thanankornm";
$password = "BrqHAmTC3w_ZRCut";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>