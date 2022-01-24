JS виджет падающего снега для любого сайта, 
для применения нужно добавить js код виджета в любой js файл на сайте (желательно в самом конце)
или можно подключить как отдельным js файтом

Виджет включает в себя:
- эффект падающего снега на сайте
- кнопку для запуска/останова снега с сохранением выбора клиента в LocalStorage

Инфо*
Виджет работает только два месяца в году - декабрь и январь, в остальные дни он не будет запускаться,
когда наступит декабрь виджет автоматически активируется а когда закончится январь - виджет опять пойдет в спячку)

У виджета есть настройки, за что они отвечают - прописано в коммитах в самом коде виджета,
основные из них:

// Запуск снега по дефолту, можно использовать или 0 или 1,  (если 0 - снег по дефолту не запускать если 1 - запускать)
var defaultStart = 1;

// Запуск снега по дефолту именно для дат c 30 декабря по 2 января (Новогодние дни) и 7 января (Рождественнские дни) можно использовать или 0 или 1,  (если 0 - снег по дефолту не запускать если 1 - запускать)
 var holydaysstart = 1;
