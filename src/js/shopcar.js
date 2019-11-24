define(['jquery'], function($) {
    return{
        render:function(){
            let id = localStorage.getItem('data');
            
           if(id){
            id = JSON.parse(id);
            let idList = id.map(elm=>elm.id).join();//遍历id变成字符串以，链接
            $.ajax({
                url:'../../lib/shop.php',
                type:'get',
                dataType:'json',
                data:{
                    idList:idList
                },
                success:function(res){
                    
                    let tmp='';
                    res.forEach(elm=>{
                        let pic=JSON.parse(elm.p_pic)
                        tmp+=`
                            <tr> 
                                <td><input type="checkbox"></td>
                                <td><img src="../img/phoneimg/${pic.src}.webp" alt=""><span>${elm.p_name}</span></td>
                                <td>${elm.p_price}元</td>
                                <td>
                                    <span class="reduce">-</span>
                                    <input type="text" value=1 class="count"></input>
                                    <span class="plus">+</span>
                                </td>
                                <td>${elm.p_price*elm.p_num}元</td>
                                <td>&times;</td>
                            </tr>
                            `;
                            
                    })
                    $('.shopList').append(tmp);
                    
                }
            })
           }
           
    },
   

    
}});