<?php
    $email = htmlspecialchars(trim($_POST['email']));
   // $email = $_POST['email']);


    if ($email == '')
    {
        echo "Заполните e-mail!";
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        echo 'Введите корректный e-mail!';
    }
    else
    {
        file_put_contents('email.txt', "$email \n", FILE_APPEND);
        echo '1';
    }