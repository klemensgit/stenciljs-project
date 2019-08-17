<?php 
require_once "DBconnect.php";

class DBcollection{

    function getData(){
        
        $db = DBconnect::getInstance();
        $statement = $db->prepare("SELECT title, content FROM collection LIMIT 1");
        
        $statement->execute();
        $project=$statement->fetch();
        
        return json_encode($project);
    }

}

?>