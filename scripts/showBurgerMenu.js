const menu = document.getElementsByClassName("header__inner-li")[0];
const burger = document.getElementsByClassName("inner__burger")[0];


burger.addEventListener("click", (event) =>{
    if (menu.style.visibility == "visible"){
        menu.style.visibility = "hidden";
        
    }
    else{
        menu.style.visibility = "visible";
        
    } 
});