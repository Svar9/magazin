<?php
$host = 'localhost'; // не менять
$login = 'root';
$password = '1234';
$dbName = 'learning';

$pdo = new PDO("mysql:dbname={$dbName};host={$host};charset=utf8", $login, $password);
$data = $pdo->query('SELECT * FROM test;');
?>
<table>
    <thead>
    <tr>
        <? for ($i = 0 ; $i < $data->columnCount() ; $i++) : ?>
            <td><?= $data->getColumnMeta($i)['name'] ?></td>
        <? endfor ?>
    </tr>
    </thead>
    <tbody>
    <? while ($row = $data->fetch(PDO::FETCH_NUM)) : ?>
    <tr>
        <? foreach ($row as $cell) : ?>
            <td><?= $cell ?></td>
        <? endforeach ?>
    </tr>
    <? endwhile ?>
    </tbody>
</table>
