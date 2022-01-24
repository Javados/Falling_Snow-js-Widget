JS виджет падающего снега для любого сайта, 
для применения нужно добавить js код виджета в любой js файл на сайте (желательно в самом конце)
или можно подключить как отдельным js файлом

Виджет включает в себя:
- эффект падающего снега на сайте
- кнопку для запуска/останова снега с сохранением выбора клиента в LocalStorage

Инфо*
Виджет работает только два месяца в году - декабрь и январь, в остальные дни он не будет запускаться,
когда наступит декабрь виджет автоматически активируется а когда закончится январь - виджет опять пойдет в спячку)

У виджета есть настройки, за что они отвечают - прописано в коммитах в самом коде виджета,
основные из них:

   // -------------------------
    // ***Настройки снега***
   // -------------------------

    // Запуск снега по дефолту, можно использовать или 0 или 1,  
    (если 0 - снег по дефолту не запускать если 1 - запускать) по дефолту установлено в 1
    - var defaultStart = 1;

    // Запуск снега по дефолту именно для дат c 30 декабря по 2 января (Новогодние дни) и 7 января (Рождественнские дни) можно использовать или 0 или 1,  
    (если 0 - снег по дефолту не запускать если 1 - запускать)
    - var holydaysstart = 1;

    // Отступ снизу для кнопки управления снегом (в px), по дефолту установлено 40 (значение должно быть целым числом)
     - var bottompos = 40;

    // Отступ справа для кнопки управления снегом, по дефолту установлено 20
    - var rightpos = 50;

    // - Скорость падения снега на странице ** от 0 до 1 **, по дефолту рекомендуется 0.6
    - var sinkspeed=0.6; 

    // Количество снежинок (густота снега) на странице, для десктопов ( от 12 до 50 ), по дефолту рекомендуется 28
    - var snowmaxDsctp=28;

    // Количество снежинок (густота снега) на странице, для мобильных ( от 6 до 34 ), по дефолту рекомендуется 12
    - var snowmaxMob=12;

    // Максимальный размер снежинки (для font-size  в единицах px), ( от 22 до 56 ), по дефолту рекомендуется 33
    - var snowmaxsize=33;

    // Минимальный размер снежинки (для font-size  в единицах px), ( от 3 до 18 ), по дефолту рекомендуется 7
    - var snowminsize=7;

    // Варианты цветов в которые может окрасится снежинка случайным образом (рендомно)
    - var snowcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF","#FFFFFF","#EFF5FF");

    // Варианты шрифтов которым может стать снежинка случайным образом (рендомно)
    - var snowtype=new Array("Arial", "Arial Black", "Calibri", "Cambria", "Verdana", "Tahoma", "Gabriola", "Sans serif","Times","Comic Sans MS","Georgia","Candara","MS Gothic","Yu Gothic");
   
    // Символ для снежинки, по дефолту рекомендуется * 
    var snowletter="*";
