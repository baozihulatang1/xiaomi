define(['jquery','md5'], function($, md5) {
   return {
       zcEv:function(selector){
           $(selector).on("click",function(){
               $.ajax({
                   url:'../../lib/zhuce.php',
                   type:"post",
                   data:{
                       phone:$("#phone").val(),
                       password:$.md5($("#password").val())
                   },
                   success:function(res){
                    alert(JSON.parse(res).msg);
                   }
               })
           })
       }
   }
    
});