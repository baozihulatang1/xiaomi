define(['jquery'], function ($) {
    return {
        render: function (callback) {
            let id = location.search.split('=')[1];
            $.ajax({
                url: '../../lib/detal.php',
                type: 'get',
                dataType: 'json',
                data: {
                    id: id
                },
                success: function (res) {
                    let pic = JSON.parse(res.p_pic);
                    let tmp = null;
                    tmp = `
                    <div class="left">
                    <img src="../img/phoneimg/${pic.detal}.jpg" alt="">
                </div>
                <div class="right">
                    <h3>${res.p_name}</h3>
                    <p>${res.p_des}</p>
                    <div class="price">${res.p_price}元</div>
                    <div class="toShopCar">加入购物车</div>
                </div>
                    `
                    $('body').append(tmp);
                    callback && callback(res.id);
                }
            })
        },

        addShopCar: function (id) {
            let arr=JSON.parse(localStorage.getItem("data"));
            if(arr){
                if(arr.some(elm=>elm.id===id)){
                    null;
                }else{
                    arr.push({id:id});
                }
            }else{
                arr=[];
                arr.push({id:id});
            }
            localStorage.setItem("data",JSON.stringify(arr));
            location.href='shopcar.html';
    }
}});