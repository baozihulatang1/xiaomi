define(["jquery"], function ($) {
    return {
        render: function () {
            $.ajax({
                url: '../../lib/index1.php',
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    let tmp = '';
                    res.forEach(elm => {
                        let pic=JSON.parse(elm.p_pic);
                        tmp += `
                        <li>
                            <div>
                                <a href="detal.html?id=${elm.id}">
                                    <img src="../img/phoneimg/${pic.src}.webp" alt="">
                                    <p class="p1">${elm.p_name}</p>
                                    <p class="p2">${elm.p_title}</p>
                                    <p class="p3">${elm.p_price}元</p>
                                </a>
                            </div>
                        </li>
                        `
                    })
                    $(".list").append(tmp);
                }
            })
        }
    }
});