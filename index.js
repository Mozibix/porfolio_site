const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const menu = document.querySelector(".dropdown_menu");
const typeWriterElement = document.querySelector("#typewriter");

toogleBtn.onclick = () => {
  menu.classList.toggle("open");

  const isOpen = menu.classList.contains("open");

  toogleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

/* CLICK OUTSIDE FUNCTION DROP-MENU*/

const isClose = () => {
  const isClose = menu.classList.remove("open");

  toogleBtnIcon.classList = isClose ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.onclick = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};
document.onscroll = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};

/*  */

/* TYPEWRITER FUNCTION */
const textArray = ["eloper", ".{React.Js}", ".{Next.Js}"];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');

// function to generate the backspace effect
const delWriter = (text, i, cb) => {
  if (i >= 0) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    // generate a random Number to emulate backspace hitting.
    const rndBack = 10 + Math.random() * 100;
    setTimeout(() => {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb == "function") {
    setTimeout(cb, 1000);
  }
};

// function to generate the keyhitting effect
const typeWriter = (text, i, cb) => {
  if (i < text.length + 1) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    // generate a random Number to emulate Typing on the Keyboard.
    const rndTyping = 250 - Math.random() * 100;
    setTimeout(() => {
      typeWriter(text, i++, cb);
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(() => {
      delWriter(text, i, cb);
    }, 1000);
  }
};

// the main writer function
const StartWriter = (i) => {
  if (typeof textArray[i] == "undefined") {
    setTimeout(() => {
      StartWriter(0);
    }, 1000);
  } else if (i < textArray[i].length + 1) {
    typeWriter(textArray[i], 0, () => {
      StartWriter(i + 1);
    });
  }
};
// wait one second then start the typewriter
setTimeout(() => {
  StartWriter(0);
}, 1000);
