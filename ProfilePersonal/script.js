let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
    var submitted = false;
    var form = document.getElementById("ss-form");
    var hiddenIframe = document.getElementById("hidden_iframe");

    form.onsubmit = function () {
        submitted = true;
        alert('Bạn đã gửi thông tin thành công tới hệ thống!');
    };

    hiddenIframe.onload = function () {
        if (submitted) {
            console.log('Send Successful to system.');
            form.reset();
        }
    };
});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer', 'Web Designer', 'Photographer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});