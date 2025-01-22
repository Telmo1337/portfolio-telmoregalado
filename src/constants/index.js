export const navigation = [
  {
    id: "0",
    title: "About me",
    url: "#about",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Contact me",
    url: "#contact",
  },
];


export const devIcons = {
  reactIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  tailwindIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  htmlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  cssIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  jsIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  framerMotionIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  figmaIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  illustratorIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg",

  cIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  cSharpIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  sqlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  angularIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  bootStrapIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
}

export const projects = [
  {
    id: "0",
    title: "Spotify Landing Page Webapp",
    description: "This is a project that I made with HTML, CSS Vanilla. It is a simple project that shows the landing page of Spotify, plan cards and so on. However, it is not responsive.",
    url: "",
    icon: [devIcons.htmlIcon, devIcons.cssIcon],
  },
  {
    id: "1",
    title: "CTESP-DWM Landing Page",
    description: "School Project for the CTESP - Web Development and Multimedia Course. This is a project that I made with HTML, CSS and JS Vanilla + using Adobe Illustrator and Figma for the design and mockup. Simple apresentation of the course. However, it is not responsive.",
    url: "",
    icon: [devIcons.htmlIcon, devIcons.cssIcon, devIcons.jsIcon, devIcons.illustratorIcon, devIcons.figmaIcon],
  },
  {
    id: "2",
    title: "SunnySide Agency Landing Page",
    description: "I've made this responsive landing page using React and TailwindCSS. It is a challenge and the original design is from Frontend Mentor website.",
    url: "",
    icon: [devIcons.reactIcon, devIcons.tailwindIcon],
  },
  {
    id: "3",
    title: "Naïf agency Landing Page",
    description: "This is a fictional agency landing page that I've used to practice my skills with React, TailwindCSS and Framer Motion. It is a responsive project and the design was made by me. The main purpose was to explore the use of Framer Motion for animations.",
    url: "",
    icon: [devIcons.reactIcon, devIcons.tailwindIcon, devIcons.framerMotionIcon],
  },
  {
    id: "4",
    title: "Advice-Generator-App",
    description: "This is a simple app that generates advice for you. It was made using React and TailwindCSS. Learning how to use Axios so I could fetch the API. This was a Front End Mentor challenge.",
    url: "",
    icon: [devIcons.reactIcon, devIcons.tailwindIcon],
  },
]