import Swiper from 'swiper';
import 'swiper/css';

// Selection of HTML objects
const burger = document.querySelector(".inner__burger");
const nav = document.querySelector('.header__inner-li');


// Calling the function after click event occurs
burger.addEventListener('click', () => {
    const toggleNav = () => {
        // burger.classList.toggle('fa-bars');
        // burger.classList.toggle('.burger__img');
        nav.classList.add('.header__inner-li-active');
        nav.classList.remove('.header__inner-li');
    }
    toggleNav();

});