import Ecommerce from "../assets/images/portfolio/Ecommerce.jpeg";
import Weather from "../assets/images/portfolio/weather.png";
import Myntra from "../assets/images/portfolio/myntra.png";

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
    img: Weather,
    name: "Weather App",
    stack: ["< HTML5 />", "< CSS />", "< JavaScript />", "< RESTful API />","< Express.js />","< Node.js />"],
    src: "https://catherineisonline.github.io/url-shortening-api-frontendmentor/",
    source: "https://github.com/IshaGitHubProfile/Weather-App",
    description:
      "Developed a dynamic Weather App using Node.js and Express.js, integrated with the OpenWeather API to provide real-time weather information for diverse global cities.",
  },
  {
    id: "bankist",
    img: Myntra,
    name: "Myntra Functional Clone",
    stack: ["< Java Script />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/IshaGitHubProfile/MyntraFunctionalClone",
    description:
      "Clone of Myntra Website where Users can effortlessly add their favorite items to the cart, mimicking the real shopping experience. The dynamic addition and removal of items contribute to the interactivity of the platform. The project dynamically calculates and displays the final price based on the items added to the cart, ensuring transparency in the shopping process.",
  },
];

export { projectsData };