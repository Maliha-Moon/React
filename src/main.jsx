import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createElement } from "react";

// import "./index.css";
import App from "./App.jsx";

function MyApp() {
  return (
    /* ❗React cannot understand HTML
    -> So the HTML syntax is parsed, 
       then converted into a tree / react element
    */
    <div>
      <h1>React App!</h1>
    </div>
  );
}

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const userName = " React";
// createElement method -> behind the scene of react element
const reactElement = createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "click me to visit Google",
  userName // inject Variable
);

createRoot(document.getElementById("root")).render(
  <StrictMode>{reactElement}</StrictMode>
  // {var_name} -> evaluated expression [Variable inject]
  // reactElement
);
