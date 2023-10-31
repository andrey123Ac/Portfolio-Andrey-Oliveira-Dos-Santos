const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");



hamburguer.addEventListener("click", ()=>{

    if(menu.style.display == "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }

});