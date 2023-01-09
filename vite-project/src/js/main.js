const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

const switchCheckBox = document.querySelector("#switch-input");

const menuCheckBox = document.querySelector("#nav-btn");
const menu = document.querySelector("#nav-menu");
const nav = document.querySelector("nav");

/* Move Cursor */
circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function moveCursor() {
  let x = coords.x;
  let y = coords.y;


  circles.forEach(function (circle, index) {
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.8;
    y += (nextCircle.y - y) * 0.8;
  });

  requestAnimationFrame(moveCursor);
}

moveCursor();

/* Cursor Click Animation */

document.addEventListener("click", mouseClickAnimation);

function mouseClickAnimation(e) {
  innerCursor.classList.remove("decrease");
  outerCursor.classList.remove("outer-decrease");
  document.addEventListener("mousedown", () => {
    innerCursor.classList.add("decrease");
    outerCursor.classList.add("outer-decrease");
  });
  document.addEventListener("mouseup", () => {
    innerCursor.classList.remove("decrease");
    outerCursor.classList.remove("outer-decrease");
  });
}

/* Hover Animation */

let links = Array.from(document.querySelectorAll("a"));
let inputs = Array.from(document.querySelectorAll("input"))
const slider = document.querySelector(".slider");

slider.addEventListener("mouseover", growCursor(slider))

links.forEach(link => {
  growCursor(link);
})

function growCursor(x) {
  x.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow")
  })
  x.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow")
  })
}

/* Dark Theme Loader From Storage*/

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

/* Dark Theme Toggle */

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  switchCheckBox.toggleAttribute("checked");
}

loadTheme();

/* Dark Theme Function */

switchCheckBox.addEventListener("change", () => {
  toggleDarkMode();

  localStorage.removeItem("dark");



  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

/* Responsive Nav */

menuCheckBox.addEventListener("change", () => {
  menu.classList.toggle("menu-active");
});

function toggleNavScrolled() {
  document.addEventListener("scroll", (e) => {


    if (pageYOffset > 0) {
      nav.classList.add("scrolled");
    }
    else {
      nav.classList.remove("scrolled");
    }
  })
};

document.addEventListener("DOMContentLoaded", () => {
  if (pageYOffset > 0) {
    nav.classList.add("scrolled");
  }
});

function toggleMenu(x) {
  x.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    menuCheckBox.checked = false;
  })
}

links.forEach(link => { toggleMenu(link); })

toggleNavScrolled();

/* Form */

inputs.forEach(input => {
  input.addEventListener("focusout", () => {
    input.classList.add("active-input")
    if (input.value) {
      input.classList.add("active-input");
    } else {
      input.classList.remove("active-input");
    }
  })
})

/* Animations */

ScrollReveal({ reset: false });
ScrollReveal().reveal('.about-header', { delay: 200 });
ScrollReveal().reveal('.about-text', { delay: 650 });
ScrollReveal().reveal('.projects-wrap', { delay: 350 });
ScrollReveal().reveal('.knowledgies-wrap', { delay: 450 });
ScrollReveal().reveal('form', { delay: 450 });

VanillaTilt.init(document.querySelectorAll(".card"));

/*
<section id="email-form-section">
      <div class="form-div">
        <form class="email-form" onsubmit="sendEmail(); reset(); return false;" >
          <div class="input-group">
            <input type="text" name="name" id="name" placeholder="">
            <label for="name">Your Name</label>
          </div>
          <div class="input-group">
            <input type="text" name="email" id="email" placeholder="" />
            <label for="email">Your Email</label>
          </div>
          <div class="textarea-group">
            <label for="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
*/