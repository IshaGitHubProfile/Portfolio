import Ecommerce from "../assets/images/portfolio/Ecommerce2.png";
import Movie from "../assets/images/portfolio/movie.png";
import Code from "../assets/images/portfolio/code.png";

const projectsData = [
  {
    id: "rest-countries",
    img: Ecommerce,
    name: "Ecommerce Website",
    stack: ["< CSS3 />", "< React.js />","< Express.js />","< Node.js />","< MongoDB />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/IshaGitHubProfile/Ecommerce",
    description:
      "Ecommerce Website where Users can effortlessly browse through a diverse range of products, register or login securely. Admin capabilities include adding, viewing, updating, and deleting products with ease, empowering administrators to manage the platform efficiently.",
  },
  {
    id: "url-shortener",
    img: Movie,
    name: "Movie App",
    stack: ["< React.js />", "< SCSS />", "< JavaScript />", "< RESTful API />"],
    src: "https://movie-six-sigma.vercel.app/",
    source: "https://github.com/IshaGitHubProfile/Movies-Database-Application",
    description:
      "This React and Redux-based movie database app uses the TMDB API. Users can explore trending, top-rated, and popular movies and TV shows, view detailed information, and search for titles. The Explore page allows filtering by genres, rating, and popularity.",
  },
  {
    id: "bankist",
    img: Code,
    name: "Real Time Code Editor",
    stack: ["< React.js />", "< Node.js />", "< Express.js />","< Socket.io />"],
    src: "https://bankist-bank.vercel.app/l",
    source: "https://github.com/IshaGitHubProfile/realtime-editor",
    description:
      "Real-Time Code Editor is a collaborative web-based code editor that allows multiple users to edit the same code simultaneously in real-time. It is built using React, Node.js, Express.js, and Socket.io.",
  },
];

export { projectsData };