//слайдер
function initItemSlider(){
    $('.js-item-slider').slick({
        infinite: false,
        fade: true,
        prevArrow: $('.js-item-slider-arrows-prev'),
        nextArrow: $('.js-item-slider-arrows-next'),
    })
}

//раскрыть описание
function openText() {
    $('.js-folded').each((index, el) => {
        const $folded = $(el);

        $folded.find('.js-folded-opener').click(() => {
            $folded.attr('data-opened', 'true');
        });
    });
}

//подписка
function initSubscribe() {
    $('.js-subscribe').each((index, el) => {
       const $subscribeBlock = $(el);

       $subscribeBlock.find('.js-subscribe-form').submit(e => {
           e.preventDefault();
           $subscribeBlock.attr('data-complete', 'true');
       });
    });
}

//переключение табов
function myTabs(){
    $(".js-tabs-label").click(function () {
        var $current = $(this).attr('data-tab');
        if ($current == 'description') {
            var $curTab = $("div").find(`[data-tab='description']`);
            $curTab.attr('data-active','true');
            var $curTab = $("div").find(`[data-tab='property']`);
            $curTab.attr('data-active','false');
        }
        else {
            var $curTab = $("div").find(`[data-tab='property']`);
            $curTab.attr('data-active','true');
            var $curTab = $("div").find(`[data-tab='description']`);
            $curTab.attr('data-active','false');
        }
    });
}

// меняем цвет картинки в зависимости от выбора радио
function changeColor(){
    $("input:radio[name='color']").click(function() {
        var $radioValue = $(this).attr('data-color');
        if ($radioValue != '3') {
            $(".js-current-color-1").attr('src', 'src/img/item-' + $radioValue + '-1.png');
            $(".js-current-color-2").attr('src', 'src/img/item-' + $radioValue + '-2.png');
            $(".js-button").attr('disabled', false);
        }
        else {
            $(".js-button").attr('disabled', true);
        }
    });
}

//отправка формы аяксом
function ajax(){
    $("#ajaxsubscribe").click(function () {
        var params = $("#ajaxinputemail").val();
        ajaxPost('ajax.php', 'email=' + params);
    });
}
function ajaxGet(url, callback){
    var f = callback || function (data){};
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            f(request.responseText);
        };
    };
    request.open('GET', url);
    request.send();
}
function ajaxPost(url, params){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            if (request.responseText == '1') {
                console.log('Подписка оформлена!');
            }
            else {
                $(".s-subscribe__text").text(request.responseText);
            }
        }
    };
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);
}


initItemSlider();
openText();
initSubscribe();
myTabs();
changeColor();
ajax();