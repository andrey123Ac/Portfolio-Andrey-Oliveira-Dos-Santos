const menu=document.getElementById("menu"),menubnt=document.getElementById("menu-bnt"),menuicon=document.getElementById("menuicon"),listaMenu=document.getElementById("listaMenu"),selecao2=document.getElementById("selecao2"),voltar=document.getElementById("voltar"),selecaoiconmenu=document.getElementById("selecaoiconmenu");$(document).ready(function(){$(window).scroll(function(){20<this.scrollY?$(".div1").addClass("sticky"):$(".div1").removeClass("sticky")}),$(".carousel").owlCarousel({margin:20,loop:!0,autoplayTimeOut:2e3,autoplayHoverPauser:!0,responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1},1e3:{items:3,nav:!1}}})}),menuicon.addEventListener("click",()=>{selecaoiconmenu.style="display: none;",menubnt.classList.add("ativacao"),menubnt.classList.add("ativacao"),menu.classList.add("animacaoMenu"),selecao2.classList.add("centro"),selecao2.classList.remove("hide")}),voltar.addEventListener("click",()=>{selecaoiconmenu.style.removeProperty("display"),menubnt.classList.remove("ativacao"),menu.classList.remove("animacaoMenu"),selecao2.classList.remove("centro"),selecao2.classList.add("hide")});