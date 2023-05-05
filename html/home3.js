


const menu = document.getElementsByClassName("header__inner-li")[0];

const showNavMenu = (event) => {
    if (menu.style.visibility == "hidden"){
        menu.style.visibility = "visible"
    }
    else{
        menu.style.visibility = "hidden"
    }  
}
