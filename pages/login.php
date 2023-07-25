<?php

include '../config.php';

$_POST['username'];


if(!isset($_POST['username']) == null && $_POST['pass'] == null){
    header("Location: ./pages/login.html");
}

?>