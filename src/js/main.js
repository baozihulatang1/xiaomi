require.config({
    shim: {
        md5: ['jquery']
    },
    paths: {
        "jquery": "./jquery.min",
        "zhuce": "./zhuce",
        "md5": "./jquery.md5",
        "register": "./register",
        "index1":"./index1",
        "detal":"./detal",
        "shopcar":"./shopcar"
    }
});

require(['zhuce','register','index1','detal','shopcar'], function (zhuce,register,index1,detal,shopcar) {
    // 注册
    zhuce.zcEv(".zc");
    // 登录
    register.login(".dl");
    // 渲染
    index1.render();
    // 详情
    detal.render(function(id){
        $('.toShopCar').on('click',function(){
            detal.addShopCar(id);
        })
    });
    // 购物车
    shopcar.render(function(){
        
    });
});