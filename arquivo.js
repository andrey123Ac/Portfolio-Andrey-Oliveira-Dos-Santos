const menu = document.getElementById("menu");
const menubnt = document.getElementById("menu-bnt");
const menuicon = document.getElementById("menuicon");
const listaMenu = document.getElementById("listaMenu");
const selecao2 = document.getElementById("selecao2");
const voltar = document.getElementById("voltar")
const selecaoiconmenu = document.getElementById("selecaoiconmenu")

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.div1').addClass("sticky");      
            
        }else{
            $('.div1').removeClass("sticky");
          
        };

    });
});


menuicon.addEventListener("click", ()=>{

    selecaoiconmenu.style = "display: none;";
    menubnt.classList.add('ativacao');
    menubnt.classList.add('ativacao');
    menu.classList.add('animacaoMenu');
    selecao2.classList.add('centro');
    selecao2.classList.remove('hide');
  
    
});

voltar.addEventListener("click", ()=>{
    
    selecaoiconmenu.style.removeProperty("display")
    menubnt.classList.remove('ativacao');
    menu.classList.remove('animacaoMenu');
    selecao2.classList.remove('centro');
    selecao2.classList.add('hide');

});