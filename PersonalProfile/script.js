let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
      })
    }
  })
}
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});


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
