
    var drag = document.querySelector('.content')
    var tuo = document.querySelector('.tuo')
    window.onload = function () {
        tuo.onmousedown = function (event) {
            var event = event || window.event;
            var diffX = event.clientX - drag.offsetLeft;
            var diffY = event.clientY - drag.offsetTop;
            if (typeof drag.setCapture !== 'undefined') {
                drag.setCapture();
            }
            tuo.onmousemove = function (event) {
                var event = event || window.event;
                var moveX = event.clientX - diffX;
                var moveY = event.clientY - diffY;
                if (moveX < 0) {
                    moveX = 0
                } else if (moveX > window.innerWidth - drag.offsetWidth) {
                    moveX = window.innerWidth - drag.offsetWidth
                }
                if (moveY < 0) {
                    moveY = 0
                } else if (moveY > window.innerHeight - drag.offsetHeight) {
                    moveY = window.innerHeight - drag.offsetHeight
                }
                drag.style.left = moveX + 'px';
                drag.style.top = moveY + 'px'
            }
            tuo.onmouseup = function (event) {
                this.onmousemove = null;
                this.onmouseup = null;

                if (typeof drag.releaseCapture != 'undefined') {
                    drag.releaseCapture();
                }
            }
        }

    };
    var login = document.querySelector('.login')
    var psw = document.querySelector('#psw')
    var phnum = document.querySelector('#phnum')
    var wrg = document.querySelector('.wrg')
    var userone = document.querySelector('.userone')
    var ewm = document.querySelector('.ewm');
    var zhuti = document.querySelector('.zhuti')
    var ewmyc = document.querySelector('.ewmyc')
    var hgewm = document.querySelector('.hgewm')
    var ydpy = document.querySelector('.ydpy')
    login.onclick = function () {
        var username = phnum.value;//必须得在内部获取值，否则事件进行了获取不到值
        var userpass = psw.value;
        if (phnum.value.length > 4 || phnum.value.length < 15) {
            ajax({
                url: 'data/login2.php',
                type: 'get',
                data: 'act=login&user=' + username + '&pass=' + userpass,
                success: function (data) {
                    var json = JSON.parse(data);
                    alert(json.msg);
                },
                failed: function (code) {
                    alert('错误' + code);
                }
            })
        }

    };
    phnum.onblur = function () {
        if (phnum.value.length < 4 || phnum.value.length > 15) {
            wrg.style.cssText = 'display:block;'
            phnum.style.cssText = 'border-bottom:1px solid red'
        } else {
            wrg.style.cssText = 'display:none;'
            phnum.style.cssText = 'border-bottom:1px solid black'
        }
    };
    userone.onclick = function () {
        zhuti.style.cssText = 'display:block;'
        userone.style.cssText = 'color:#a51b1b;'
        ewm.style.cssText = 'color:black;'
        ewmyc.style.cssText = 'display:none;'
    }
    ewm.onclick = function () {
        zhuti.style.cssText = 'display:none;'
        ewm.style.cssText = 'color:#a51b1b;'
        userone.style.cssText = 'color:black;'
        ewmyc.style.cssText = 'display:block;'
    };
    $('.hgewm').mousemove(function () {
        $(this).addClass('aa')
        $('.ydpy').addClass('bb')
        $('.ydpy').removeClass('cc')
        $(this).removeClass('dd')
    })
    $('.hgewm').mouseleave(function () {
        $(this).removeClass('aa')
        $('.ydpy').removeClass('bb')
        $('.ydpy').addClass('cc')
        $(this).addClass('dd')
    })
var closer=document.querySelector('.closer')
closer.onclick=function(){
    drag.style.cssText='display:none'
}
