<?php

require_once ("./DBcollection.php");

if($_SERVER['REQUEST_METHOD'] == "GET"){
    if($_GET['url'] == "data"){
        echo DBcollection::getData();
    }
}

?>