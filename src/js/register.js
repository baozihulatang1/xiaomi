define(['jquery','md5'], function($, md5) {
    return {
        login:function(selector){
            $(selector).on("click",function(){
                $.ajax({
                    url:'../../lib/register.php',
                    type:'get',
                    data:{
                        phone:$("#phone").val(),
                        password:$.md5($("#password").val())
                    },
                    success:function(res){
                        let Ores=JSON.parse(res).msg;
                        Ores==="登陆成功"?location.href='index1.html':alert(Ores);
                       }
                })
            })
        }
    }
    
});