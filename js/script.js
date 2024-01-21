/*кнопка на верх*/
$(document).ready(function () {
    var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки

    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
    /* конец кнопка на верх*/


    $('video').on('click', function () { (this.paused) ? this.play() : this.pause() });

    $(window).scroll(function () {
        if (innerWidth > 1200) {
            if ($(this).scrollTop() > 1300) {
                $('.arrow').css('width', '1678');
                setTimeout(" $('.people4').css('display', 'block')", 4000);
            }
        } else {
            if ($(this).scrollTop() > 2000) {
                $('.arrow').css('width', '1007');
            }
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 680) {
            setTimeout("$('.curve').css('width', '100%')", 6000);

            setTimeout("$('.relativeCurveLeft1').css('width', '107')", 6000);
            setTimeout("$('.relativeCurveLeft2').css('width', '130')", 6000);
            setTimeout("$('.relativeCurveLeft3').css('width', '177')", 6000);
            setTimeout("$('.relativeCurveLeft4').css('width', '288')", 6000);

        }
    });

    if(innerWidth<1200){
    $('.icon').removeClass('bounceInLeft').
        removeClass('bounceInRight').
        removeClass('bounceInDown').
        removeClass('bounceInUp').
         addClass('bounceIn');

        $('.blockForm .form').removeClass('flipInX').
    addClass('bounceIn');
    }
    if(innerWidth<801){
        $('.colorBlock').attr('data-wow-delay', '1s');
    }
    //setTimeout("$('.colorBlock').removeClass('animated')", 9000);

   /*
    $('.colorBlock').on('mouseenter', function () {

      
        $(this).css('transform', 'rotateX(360deg)');
        $(this).css('color', '#333');
        console.log(1);
    });
    $('.colorBlock').on('mouseleave', function () {
        $(this).css('transform', 'rotateX(0deg)');
        $(this).css('color', '#fff');
        console.log(32);
    });
    */
});
















