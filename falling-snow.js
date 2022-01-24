// ============Виджет падаючщего снега (начало) ====================
console.time('speed falling-snow js');

function falingSnowInit() {

    var snowmax, marginbottom, marginright, text1El;

    // -------------------------
    // ***Настройки снега***
    // -------------------------

    // Запуск снега по дефолту, можно использовать или 0 или 1,  (если 0 - снег по дефолту не запускать если 1 - запускать) по дефолту установлено в 1
    var defaultStart = 1;

    // Запуск снега по дефолту именно для дат c 30 декабря по 2 января (Новогодние дни) и 7 января (Рождественнские дни) можно использовать или 0 или 1,  (если 0 - снег по дефолту не запускать если 1 - запускать)
    var holydaysstart = 1;

    // Отступ снизу для кнопки управления снегом (в px), по дефолту установлено 40 (значение должно быть целым числом)
    var bottompos = 40;

    // Отступ справа для кнопки управления снегом, по дефолту установлено 20
    var rightpos = 50;

    // - Скорость падения снега на странице ** от 0 до 1 **, по дефолту рекомендуется 0.6
    var sinkspeed=0.6; 

    // Количество снежинок (густота снега) на странице, для десктопов ( от 12 до 50 ), по дефолту рекомендуется 28
    var snowmaxDsctp=28;

    // Количество снежинок (густота снега) на странице, для мобильных ( от 6 до 34 ), по дефолту рекомендуется 12
    var snowmaxMob=12;

    // Максимальный размер снежинки (для font-size  в единицах px), ( от 22 до 56 ), по дефолту рекомендуется 33
    var snowmaxsize=33;

    // Минимальный размер снежинки (для font-size  в единицах px), ( от 3 до 18 ), по дефолту рекомендуется 7
    var snowminsize=7;

    // Варианты цветов в которые может окрасится снежинка случайным образом (рендомно)
    var snowcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF","#FFFFFF","#EFF5FF");

    // Варианты шрифтов которым может стать снежинка случайным образом (рендомно)
    var snowtype=new Array("Arial", "Arial Black", "Calibri", "Cambria", "Verdana", "Tahoma", "Gabriola", "Sans serif","Times","Comic Sans MS","Georgia","Candara","MS Gothic","Yu Gothic");
   
    // Символ для снежинки, по дефолту рекомендуется * 
    var snowletter="*";

    // Системные настройки (менять не рекомендуется)
    var snowingzone=1;
    var snow=new Array();
    var i_snow=0;
    var x_mv=new Array();
    var crds=new Array();
    var lftrght=new Array();
    var browserinfos=navigator.userAgent;
    var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/);
    var ns6=document.getElementById&&!document.all;
    var opera=browserinfos.match(/Opera/);
    var browserok=ie5||ns6||opera;
    var defaultStartRes = defaultStart === 1 ? defaultStart :  checkHolidays() ? holydaysstart : defaultStart;

    if (window.screen.width > 700) {snowmax = snowmaxDsctp;
    }else{snowmax = snowmaxMob;}

    var choiceUStart = localStorage.getItem('chstart') ? Number(localStorage.getItem('chstart')) : defaultStartRes;

    if (isNaN(choiceUStart)) {
        choiceUStart = 0;
    }

    function randommaker(range) {
        rand=Math.floor(range*Math.random());
        return rand;
    }
    function movesnow() {
        for(i=0;i<=snowmax;i++) {
            crds[i]+=x_mv[i];
            snow[i].posy+=snow[i].sink;
            snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+"px";
            snow[i].style.top=snow[i].posy+"px";
            if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])) {
                if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                snow[i].posy=0;
            }
        }
        if (choiceUStart) {
            setTimeout(movesnow,60);
        }
    }
    function checkHolidays() {
        var nowDate = new Date();
        if (nowDate.getMonth() == 0) {
            if (nowDate.getDate() == 1 || nowDate.getDate() == 2 || nowDate.getDate() == 7) {
                return true;
            }
        }else if (nowDate.getMonth() == 11) {
            if (nowDate.getDate() == 30 || nowDate.getDate() == 31) {
                return true;
            }
        } else {return false;}
    }
    // Рендер кнопки
    function renderSnowControl() {
        var btnControl = document.createElement('button');
        btnControl.style.backgroundColor = "#312877";
        btnControl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="26px" height="26px" viewBox="0 0 1280.000000 1096.000000" preserveAspectRatio="xMidYMid meet" style="cursor:pointer">' +
            '<g transform="translate(0.000000,1096.000000) scale(0.100000,-0.100000)" fill="#F0FFFF" stroke="none">' +
                '<path d="M3146 10652 c-23 -48 -89 -185 -146 -304 l-102 -217 347 -581 c191 -320 350 -591 352 -601 5 -18 -13 -19 -643 -21 l-649 -3 -163 -305 c-89 -168 -161 -312 -158 -321 2 -9 68 -124 146 -256 l143 -240 156 -6 c86 -4 539 -16 1006 -27 468 -12 859 -23 871 -26 16 -3 158 -233 563 -910 311 -519 539 -910 534 -915 -5 -5 -479 -8 -1088 -7 l-1079 3 -477 805 c-262 443 -482 811 -488 818 -9 9 -97 12 -376 12 l-365 0 -130 -260 c-71 -143 -130 -264 -130 -269 0 -5 144 -250 320 -544 287 -480 327 -551 318 -559 -2 -2 -352 -5 -778 -8 l-774 -5 -178 -284 c-98 -156 -178 -288 -178 -293 0 -5 10 -22 21 -38 12 -16 92 -147 178 -292 l157 -263 724 -5 c636 -4 725 -7 724 -20 -1 -8 -137 -222 -304 -475 l-302 -460 122 -240 c68 -132 138 -268 157 -302 l34 -62 337 -3 c185 -2 342 -2 347 0 6 1 228 351 494 777 266 426 490 776 498 780 8 3 503 5 1099 5 942 0 1085 -2 1090 -15 5 -13 -967 -1656 -1003 -1695 -12 -13 -135 -15 -991 -15 l-977 0 -172 -285 c-94 -157 -177 -294 -183 -306 -11 -19 7 -47 157 -260 l168 -239 655 -5 c595 -5 655 -6 654 -21 -1 -9 -171 -299 -378 -643 -207 -345 -376 -635 -376 -644 1 -9 76 -147 169 -307 l167 -290 360 -2 359 -2 360 604 c239 402 365 604 375 602 8 -1 131 -217 275 -479 143 -263 265 -482 270 -487 6 -5 163 -19 349 -31 330 -21 340 -21 353 -3 8 10 89 139 180 286 144 234 164 271 155 291 -5 12 -206 363 -446 779 -240 416 -441 767 -447 780 -9 20 50 124 521 910 298 497 537 886 543 884 22 -7 987 -1631 984 -1653 -2 -12 -223 -382 -491 -822 l-487 -801 177 -298 c97 -164 182 -303 188 -309 8 -9 88 -6 308 10 163 11 298 23 301 26 3 3 147 241 322 530 174 289 323 532 332 540 13 13 17 12 31 -9 10 -14 184 -304 388 -645 l370 -621 230 -7 c126 -5 285 -7 354 -5 l125 2 177 290 c97 160 177 296 177 304 1 7 -159 281 -355 609 -226 379 -352 598 -346 604 7 7 198 2 529 -11 285 -12 541 -21 570 -21 l52 0 178 255 c97 140 184 265 191 278 14 22 6 39 -154 315 l-169 292 -70 1 c-38 0 -462 8 -942 17 -747 15 -874 19 -887 32 -33 34 -997 1663 -992 1676 5 12 155 14 1028 12 l1023 -3 467 -780 468 -780 87 -3 c49 -2 196 0 328 3 l240 7 178 267 c97 146 177 272 177 279 0 7 -126 231 -281 497 -167 289 -279 491 -275 500 5 13 93 15 703 15 l698 0 188 303 c104 166 194 310 200 320 8 11 9 22 2 31 -6 8 -95 129 -200 270 l-190 255 -706 1 c-553 0 -709 3 -717 13 -7 9 73 150 300 527 170 283 314 525 320 537 9 18 -14 57 -186 311 -107 159 -203 292 -212 296 -8 3 -143 6 -298 6 -257 0 -284 -2 -298 -17 -9 -10 -248 -385 -532 -833 -285 -448 -525 -821 -534 -827 -24 -19 -1990 -19 -1998 0 -4 12 1028 1750 1063 1789 15 17 76 18 952 20 l936 3 158 268 157 269 -151 281 c-83 155 -155 285 -158 290 -4 4 -270 12 -591 17 -333 5 -587 13 -593 19 -5 5 124 230 338 587 211 353 344 585 342 596 -3 9 -87 160 -187 333 l-183 317 -31 -5 c-17 -3 -170 -18 -340 -33 -170 -16 -313 -33 -319 -39 -5 -5 -165 -271 -356 -590 -207 -346 -353 -580 -361 -580 -9 0 -144 216 -334 534 l-320 533 -160 -7 c-89 -4 -253 -12 -366 -19 l-205 -11 -147 -245 c-82 -134 -148 -250 -148 -257 0 -6 219 -399 486 -873 l486 -860 -507 -848 c-279 -466 -513 -854 -521 -862 -9 -9 -17 -11 -23 -5 -18 19 -1101 1839 -1101 1851 0 6 208 355 461 775 254 420 464 771 466 780 6 23 -315 549 -336 549 -9 0 -151 7 -316 15 -165 8 -310 15 -322 15 -18 0 -72 -81 -319 -477 -163 -263 -302 -483 -308 -490 -6 -7 -16 -9 -22 -5 -6 4 -165 267 -355 585 -246 413 -350 579 -364 582 -11 2 -185 6 -388 9 l-367 5 -44 -87z"/>' +
            '</g>' +
        '</svg>';
        btnControl.style.position = "fixed";
        btnControl.style.zIndex = "999";
        btnControl.style.padding = "4px";
        btnControl.style.width = "36px";
        btnControl.style.height = "36px";
        btnControl.style.bottom = '100%';
        btnControl.style.right = rightpos + 'px';
        btnControl.style.border = "1px solid #EFF5FF";
        btnControl.style.borderRadius = "50%";
        btnControl.style.transition.bottom = "3s";
        choiceUStart ? btnControl.title = "Отключить снег" : btnControl.title = "Включить снег";
        choiceUStart ? btnControl.setAttribute("data-status", "run"): btnControl.setAttribute("data-status", "stop");

        btnControl.addEventListener("mouseover", function() {
            btnControl.style.boxShadow = "0px 0px 0px 1px #f0f0f0";
            if (this.getAttribute('data-status') == 'stop') {
                btnControl.style.backgroundColor = "#28a745";
            }else {
                btnControl.style.backgroundColor = "#dc3545";
            }
        });
        btnControl.addEventListener("mouseout", function() {
            btnControl.style.backgroundColor = "#312877";
            btnControl.style.boxShadow = "none";
        });
        btnControl.addEventListener("click", function() {
            if (this.getAttribute('data-status') == 'stop') {
                this.setAttribute("data-status", "run");
                choiceUStart = 1;
                initsnow();
                localStorage.setItem('chstart', 1);
                this.title="Отключить снег";
                btnControl.style.backgroundColor = "#dc3545";
            }else {
                this.setAttribute("data-status", "stop");
                stopSnow();
                localStorage.setItem('chstart', 0);
                this.title="Включить снег";
                btnControl.style.backgroundColor = "#28a745";
            }
            
        });
        document.body.append(btnControl);
        btnControl.style.bottom = bottompos + 'px';
        function renderText1() {
            var alreadySC = 0;
            if (localStorage.getItem('chstart')) {return;}
            if (localStorage.getItem('alreadysc')) {
                alreadySC = Number(localStorage.getItem('alreadysc'));
                if (alreadySC >= 1) {return;}
                alreadySC += 1;
                localStorage.setItem('alreadysc', alreadySC)
            }else {localStorage.setItem('alreadysc', 0);}

            var text1 = document.createElement('span');
            text1.style.display = "inline-block";
            text1.style.padding = "2px 6px";
            text1.style.backgroundColor = "#ffffff";
            text1.style.borderRadius = "3px";
            text1.style.boxShadow = "0px 0px 0px 1px #f0f0f0";
            text1.style.fontSize = "8px";
            text1.style.fontWeight = "600";
            text1.style.position = "absolute";
            text1.style.top = "-25px";
            text1.style.left = "-9px";
            choiceUStart ? text1.innerHTML = 'Отключить снег' : text1.innerHTML = 'Включить снег';
            btnControl.append(text1);
            var showInfo = setInterval(function () {
                text1.style.display = "inline-block";
                setTimeout(function() {
                    text1.style.display = "none";
                },1400);
            }, 2200);
            setTimeout(function() {
                clearInterval(showInfo);
            },4500);
        }
        
        setTimeout(function() {
            renderText1();
        },4000);
    }
    function removeEl(el) {
        el.parentNode.removeChild(el);
    }
    // Инициализация (запуск) снежинок
    function initsnow() {

        // Добавляем снежинки на страницу (в конец тега body)
        for (i=0;i<=snowmax;i++) {
            var span = document.createElement('span');
            span.id = 's' + i;
            span.style.position = "fixed";
            span.style.zIndex = "9";
            span.style.pointerEvents = "none";
            span.style.top = snowmaxsize + "px";
            span.style.fontFamily=snowtype[randommaker(snowtype.length)];
            span.append(snowletter);     
            document.body.append(span);
        }

        if (ie5 || opera) {
            marginbottom=document.body.clientHeight;
            marginright=document.body.clientWidth;
        }
        else if (ns6) {
            marginbottom=window.innerHeight;
            marginright=window.innerWidth;
        }
        var snowsizerange=snowmaxsize-snowminsize;
        for (i=0;i<=snowmax;i++) {
            crds[i]=0;
            lftrght[i]=Math.random()*15;
            x_mv[i]=0.03+Math.random()/10;
            snow[i]=document.getElementById("s"+i);
            snow[i].size=randommaker(snowsizerange)+snowminsize;
            snow[i].style.fontSize=snow[i].size+"px";
            snow[i].style.color=snowcolor[randommaker(snowcolor.length)];
            snow[i].sink=sinkspeed*snow[i].size/5;
            if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
            if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
            if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
            if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
            snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size);
            snow[i].style.left=snow[i].posx+"px";
            snow[i].style.top=(snow[i].posy ) +"px";
        }
        movesnow();
    }
    // Остановка снега
    function stopSnow() {
        for (i=0;i<=snowmax;i++) {
            snow[i]=document.getElementById("s"+i);
            if (snow[i]) {
                snow[i].parentNode.removeChild(snow[i]);
            }
        }
        choiceUStart = 0;
    }
    
    if (browserok) {
        setTimeout(function() {
            if (choiceUStart) {
                initsnow();
            }
            // Добавляем кнопку управления снегом на страницу
            renderSnowControl();
        }, 1500);
    }
}
window.onload = function() {
    var nowDate = new Date();
    var thisMonth = nowDate.getMonth();
    // Если это декабрь и январь
    if (thisMonth == 11 || thisMonth == 0) {
        falingSnowInit();
    }
}; 
console.timeEnd('speed falling-snow js');
// ============Виджет падаючщего снега (конец) ====================
