let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');




var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;

function myfunction() {
    let FormInput = ['nameInput', 'addressInput', 'phoneNumber', 'orderDate', 'howmurch', 'yourorder'];
    let nameInput = document.getElementById('name');
    let addressInput = document.getElementById('address');
    let phoneNumber = document.getElementById('phoneNumber');
    let orderDate = document.getElementById('date');
    let howmurch = document.getElementById('number');
    let yourorder = document.getElementById('room');
    let message;


    if (nameInput.value && yourorder.value && orderDate.value && addressInput.value) {
        document.getElementById('display').classList.add('msg');

        message = "<h3>Thank you for ordering with Fast Food Cafe... <br> your order will be delivered in 20min or less.<br>after payment confirmation.</h3>"

    } else {

        document.getElementById("display").classList.add("error");
        message = "please input all the fields as recommeded";
    }

    document.getElementById('display').innerHTML = message;

}