function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var count = 1;

function toggleImage() {
  let pic1 = document.getElementById("profile-pic-1");
  let pic2 = document.getElementById("profile-pic-2");
  let pic3 = document.getElementById("profile-pic-3");
  let pic4 = document.getElementById("profile-pic-4");
  count++;
  if (count == 1) {
    pic1.style.opacity = 1;
    setTimeout(function () {
      pic2.style.opacity = 1;
      pic3.style.opacity = 1;
      pic4.style.opacity = 1;
    }, 300);
  } else if (count == 2) {
    pic1.style.opacity = 0;
    pic2.style.opacity = 1;
    pic3.style.opacity = 1;
    pic4.style.opacity = 1;
  } else if (count == 3) {
    pic1.style.opacity = 0;
    pic2.style.opacity = 0;
    pic3.style.opacity = 1;
    pic4.style.opacity = 1;
  } else if (count == 4) {
    pic1.style.opacity = 0;
    pic2.style.opacity = 0;
    pic3.style.opacity = 0;
    pic4.style.opacity = 1;
  } else {
    pic1.style.opacity = 1;
    setTimeout(function () {
      pic2.style.opacity = 1;
      pic3.style.opacity = 1;
      pic4.style.opacity = 1;
    }, 300);
    count = 1;
  }
}
