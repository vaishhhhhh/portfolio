export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Travel freindly social application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CSI Feedback",
    des: "Checkout the college feedback system where students and professors come togehter to reach out and improve their skills together",
    img: "/CSIFEEDBACK.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://csifeedback.netlify.app/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    des: "Replicating features of netflix using React and REST API",
    img: "/NETFLIX.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://vaishhhhhh.github.io/netflix_page_clone/",
  },
  {
    id: 3,
    title: "SearchMe",
    des: "Cloning Google search bar services using Wikipedia API",
    img: "/SEARCHME.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://vaishhhhhh.github.io/wikisearch/",
  },
  {
    id: 4,
    title: "TIC TAC TOE",
    des: "A classic game to retrieve your childhood",
    img: "/tictac.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://vaishhhhhh.github.io/tic/",
  },
];

export const testimonials = [
    {
    quote:
      "Your expertise in uncovering meaningful trends from complex datasets has been instrumental in driving business success.",
    name: "Manju Jha",
    title: "Team Manager at Cognizant",
    img: "/manjujha.png"
  },
  {
    quote:
      "Vaishnav's exceptional web development expertise brings innovative solutions that elevate team performance and project success.",
    name: "Nikhil Karthik",
    title: "Director of Tipstat",
    img: "/nikhil.png"
  },
  {
    quote:
      "Your technical acumen and leadership have transformed complex challenges into seamless, user-friendly web applications",
    name: "Pratap Varma",
    title: "Team lead at Amazon",
    img: "/pratap.png"
  },
];

export const companies = [
  {
    id: 1,
    name: "Amazon",
    img: "/Amazon.svg",
    
  },
  {
    id: 2,
    name: "Cognizant",
    img: "/Cognizant.svg",
    
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Analyst",
    desc: "Analyzed and modeled large datasets to derive actionable insights, meeting client needs with a 95% data accuracy rate.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/vaishhhhhh"
  },
  {
    id: 3,
    img: "/link.svg",
     link: "https://www.linkedin.com/in/vaishnav-done-143609109/"
  },
];
