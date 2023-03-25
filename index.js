const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const menu = document.querySelector(".dropdown_menu");
const typeWriterElement = document.querySelector("#typewriter");
const projectContainer = document.querySelector(".projects_container");
const sections = document.querySelectorAll("section");
const scrollIndicator = document.querySelector(".scroll_indicator");
const dots = document.querySelectorAll(".scroll_indicator a");

/* ------------------------HIDE THE SIDE BAR AT A CERTAIN HEIGHT -------------*/
window.addEventListener("scroll", () => {
  scrollIndicator.classList.toggle("visible", window.scrollY > 80);
});

/* -----------------------SIDE-BAR FUNCTIONS----------------------- */

const removeActive = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active_link");
  });
};

const addActiveClass = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentDot = document.querySelector(
        `.scroll_indicator a[href="#${entry.target.id}"]`
      );
      removeActive();
      currentDot.classList.add("active_link");
    }
  });
};

const options = {
  threshold: 1,
};
const observer = new IntersectionObserver(addActiveClass, options);

sections.forEach((section) => {
  observer.observe(section);
});

/* --------------------------------HAMBURGER TOGGLE-------------------------------- */
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

/* function to generate the backspace effect */
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

/* function to generate the keyhitting effect */
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

/* -------------------------------------PROJECT DETAILS------------------------------------- */

const projectsInfo = [
  {
    id: 1,
    img_src: "./images/project-pics.png",
    header: "header1",
    quotes:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaeipsa et in commodi perspiciatis suscipit totam vitae ab expedita, quia, illum enim velit aut autem, ratione corrupti! Doloribus",
    stacks: [
      {
        id: 1,
        lang: "react",
      },
      {
        id: 2,
        lang: "tailwindcss",
      },
      {
        id: 3,
        lang: "sass",
      },
      {
        id: 4,
        lang: "bootstrap",
      },
    ],
    codes_link: "#nav_sec",
    live_link: "#nav_sec",
    class: "",
  },
  /*  */
  {
    id: 2,
    img_src: "./images/project-pics.png",
    header: "header2",
    quotes:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaeipsa et in commodi perspiciatis suscipit totam vitae ab expedita, quia, illum enim velit aut autem, ratione corrupti! Doloribus,",
    stacks: [
      {
        id: 1,
        lang: "react",
      },
      {
        id: 2,
        lang: "tailwindcss",
      },
      {
        id: 3,
        lang: "sass",
      },
      {
        id: 4,
        lang: "bootstrap",
      },
    ],
    codes_link: "#nav_sec",
    live_link: "#nav_sec",
    class: "inverse",
  },
  /*  */
  {
    id: 3,
    img_src: "./images/project-pics.png",
    header: "header3",
    quotes:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaeipsa et in commodi perspiciatis suscipit totam vitae ab expedita, quia, illum enim velit aut autem, ratione corrupti! Doloribus,",
    stacks: [
      {
        id: 1,
        lang: "react",
      },
      {
        id: 2,
        lang: "tailwindcss",
      },
      {
        id: 3,
        lang: "sass",
      },
    ],
    codes_link: "#nav_sec",
    live_link: "#nav_sec",
    class: "",
  },
  /*  */
  {
    id: 4,
    img_src: "./images/project-pics.png",
    header: "header4",
    quotes:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaeipsa et in commodi perspiciatis suscipit totam vitae ab expedita, quia, illum enim velit aut autem, ratione corrupti! Doloribus,",
    stacks: [
      {
        id: 1,
        lang: "react",
      },
      {
        id: 2,
        lang: "tailwindcss",
      },
      {
        id: 3,
        lang: "sass",
      },
      {
        id: 4,
        lang: "bootstrap",
      },
    ],
    codes_link: "#nav_sec",
    live_link: "#nav_sec",
    // class: "inverse",
    class: "inverse",
  },
  /*  */
];

const projectSec = projectsInfo.map((projects, key) => {
  const { stacks } = projects;
  const classes = `${projects.class.toString()}  projects_display_inner`;

  return `
    <div class="projects_display" key=${key}>
      <div class=${classes}>
        <div class="projects_top dark_preview_bg">
          <div class="projects_preview">
            <img src=${projects.img_src} alt="project-view" />
          </div>
        </div>

        <div class="projects_bottom">
          <h4 class="box_header center">
          ${projects.header}
          </h4>
          <div class="projects_quote small_text projects">
              ${projects.quotes}      
           </div>
          <div class="projects_stack box_header small_header ">
          <ul> 
          ${stacks
            .map(({ lang }, id) => {
              return `
            <li key=${id}>${lang}</li>
            `;
            })
            .join(" ")}
          </ul>
          
          </div>
          <div class="projects_btn action_btns space">
            <div class="git_btn">
              <a class="action_btns" href="#nav_sec">
                <img src="./images/github_logo.png" alt="github-icon" />
                <span class="small_text projects">code</span>
              </a>
            </div>

            <div class="live_btn">
              <a class="action_btns" href="#nav_sec">
                <img src="./svgs/external-link.svg" alt="livesite-icon" />
                <span class="small_text projects">demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
});

projectContainer.innerHTML = projectSec.join(" ");
