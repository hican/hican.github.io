<?php
$db = new SQLite3('abc.db');
$result = $db->query("select * from users");
var_dump($result->fetchArray());
?>