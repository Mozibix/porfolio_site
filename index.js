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

/* BACKGROUND PARTICLE */
document.addEventListener("mousemove", function (e) {
  const body = document.querySelector("body");
  const particles = document.createElement("span");
  particles.classList.add("particle");
  const x = e.offsetX;
  const y = e.offsetY;
  particles.style.left = x + "px";
  particles.style.top = y + "px";

  const size = Math.random() * 8;
  particles.style.width = 2 + size + "px";
  particles.style.height = 2 + size + "px";
  body.appendChild(particles);

  const tranformValue = Math.random() * 360;
  particles.style.transform = "rotate(" + tranformValue + "deg)";

  body.style.overflowX = "hidden";

  setTimeout(function () {
    particles.remove();
  }, 2000);
});

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
    img_src: "./images/crownplan_project_pics.png",
    header: "Crown Plan",
    quotes:
      "A well-designed and functional web-application that provides users with an effective tool for planning and tracking their tasks and goals. Its user-friendly interface and intuitive features make it a great choice for anyone looking to stay organized and productive.",
    stacks: [
      {
        id: 1,
        lang: "next.js",
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
    codes_link: "https://github.com/Mozibix/crown-plan-project",
    live_link: "https://crown-plan-project.vercel.app/",
    class: "",
  },
  /*  */
  {
    id: 2,
    img_src: "./images/darkchat_hero_pics.png",
    header: "DarkChat-App",
    quotes:
      "The Darkchat-App is a well-designed real-time chat application that uses modern web technologies to deliver a seamless user experience. It is a great example to understand how vanilla Javascript works with the DOM.",
    stacks: [
      {
        id: 1,
        lang: "HTML",
      },
      {
        id: 2,
        lang: "SASS",
      },
      {
        id: 3,
        lang: "JAVASCRIPT",
      },
    ],
    codes_link: "https://github.com/Mozibix/social-web-application",
    live_link: "https://dark-chat-app.vercel.app/",
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
              <a class="action_btns" href=${
                projects.codes_link
              } target="_blank">
                <img src="./images/github_logo.png" alt="github-icon" />
                <span class="small_text projects">code</span>
              </a>
            </div>

            <div class="live_btn">
              <a class="action_btns" href=${projects.live_link} target="_blank">
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
