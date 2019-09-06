// Диалоговое окно
var result = confirm("Завершить выполнение программы?");
if(result===true)
    document.write("Работа программы завершена");
else
    document.write("Программа продолжает работать");

//метод prompt() позволяет с помощью диалогового окна запрашивать у пользователя какие-либо данные. Данный метод возвращает введенное пользователем значение:
var age = prompt("Введите свой возраст:");
document.write("Вам " + age + " лет"); // Если пользователь откажется вводить значение и нажмет на кнопку отмены, то метод возвратит значение null.

// Открытие, закрытие и позиционирование окон
var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
    //width: ширина окна в пикселях. Например, width=640
    //height: высота окна в пикселях. Например, height=480
    //left: координата X относительно начала экрана в пикселях. Например, left=0
    //top: координата Y относительно начала экрана в пикселях. Например, top=0
    //titlebar: будет ли окно иметь строку с заголовком. Например, titlebar=no
    //menubar: будет ли окно иметь панель меню. Например, menubar=yes
    //toolbar: будет ли окно иметь панели инструментов. Например, toolbar=yes
    //location: будет ли окно иметь адресную строку. Например, location=no
    //scrollbars: допускается ли наличие полос прокрутки. Например, scrollbars=yes
    //status: наличие статусной строки. Например, status=yes
    //resizable: может ли окно изменять размеры. Например, resizable=no

// С помощью метода close() можно закрыть окно. Например, откроем новое окно и через 10 секунд закроем его:
var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
function closeWindow(){
    popup.close();
}
setTimeout(closeWindow, 10000);
// Метод moveTo() позволяет переместить окно на новую позицию:
var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
popup.moveTo(50,50);
// Метод resizeTo() позволяет изменить размеры окна:
var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
popup.resizeTo(500,350); // 500 - ширина и 350 - высота

// информация о странице
document.write("Строка запроса: " + location.href + "<br />");
document.write("Путь к ресурсу: " + location.pathname + "<br />");
document.write("Схема: " + location.origin + "<br />");
document.write("Протокол: " + location.protocol + "<br />");
document.write("Порт: " + location.port + "<br />");
document.write("Хост: " + location.host + "<br />");
document.write("Имя хоста: " + location.hostname + "<br />");
document.write("Хэш: " + location.hash + "<br />");
document.write("Поиск: " + location.search + "<br />");


// https://metanit.com/web/javascript/8.5.php добавление удаление итд элементов