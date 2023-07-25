<?php

include '../config.php';

$_POST['username'];


if(!isset($_POST['username'])  && !isset($_POST['pass'])){
    header("Location: ./pages/login.html");
}

?>