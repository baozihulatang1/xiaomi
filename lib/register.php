<?php
    // 1. 连接数据库
    include('./conn.php');

    // 业务逻辑
    // 1. 连接数据库
    // 2. 接收数据
    // 3. 验证数据
    // 4. 根据验证结果进行操作 插入/提示

    // 2. 接收数据
    $password = $_REQUEST['password'];
    $phone = $_REQUEST['phone'];

    // echo "$username  $password  $email  $phone";

    // 3. 验证数据  判断用户名是否存在
    $sql = "select * from user where user_phone='$phone' and user_pass='$password'";
    $result = $mysqli->query($sql); //执行查询语句

    if($result->num_rows>0){
        // 数据库中有数据
        echo '{"msg":"登陆成功"}';
        $mysqli->close();
        die;
    }
        echo '{"msg":"用户名或密码错误"}';
   
?>