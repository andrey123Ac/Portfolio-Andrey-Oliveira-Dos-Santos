const menu = document.getElementById("menu");
const menubnt = document.getElementById("menu-bnt");
const menuicon = document.getElementById("menuicon");
const listaMenu = document.getElementById("listaMenu");
const selecao2 = document.getElementById("selecao2");
const voltar = document.getElementById("voltar")
const selecaoiconmenu = document.getElementById("selecaoiconmenu")
const detec = document.getElementById("detec")
const detec2 = document.getElementById("detec2")
const detec3 = document.getElementById("detec3")
const detec4 = document.getElementById("detec4")
const detec5 = document.getElementById("detec5")
const detec6 = document.getElementById("detec6")
const detec7 = document.getElementById("detec7")





$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.div1').addClass("sticky");

        } else {
            $('.div1').removeClass("sticky");

        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });


    var typed = new Typed(".typing", {
        strings:["Desenvolvedor", "Wed"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
       strings:["Desenvolvedor", "Wed"],
       typeSpeed:100,
       backSpeed:60,
       loop:true
   });



    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


menuicon.addEventListener("click", () => {

    selecaoiconmenu.style = "display: none;";
    menubnt.classList.add('ativacao');
    menubnt.classList.add('ativacao');
    menu.classList.add('animacaoMenu');
    selecao2.classList.add('centro');
    selecao2.classList.remove('hide');


});

voltar.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});

detec.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});

detec2.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});

detec3.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});

detec4.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});

detec5.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});

detec6.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});

detec7.addEventListener("click", () => {

    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});