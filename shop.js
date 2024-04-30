let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF'
tg.MainButton.color = '#A52A2A'

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.sexText('Вы выбрали торт!');
        item = 'торт';
        tg.MainButton.show();
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.sexText('Вы выбрали круассан!');
        item = 'круассан';
        tg.MainButton.show();
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.sexText('Вы выбрали плюшку с творогом!');
        item = 'плюшка';
        tg.MainButton.show();
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.sexText('Вы выбрали муравейник!');
        item = 'муравейник';
        tg.MainButton.show();
    }
}

btn5.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.sexText('Вы выбрали слойку с вишней!');
        item = 'слойка';
        tg.MainButton.show();
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})