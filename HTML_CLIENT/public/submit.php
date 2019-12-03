<?php 
  
header("Content-Type: plain/text"); 
  
$data = json_decode(file_get_contents("php://input")); 
?> 