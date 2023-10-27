const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");



hamburguer.addEventListener("click", ()=>{

    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }

});