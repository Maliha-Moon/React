// Behind the scene of Rendering '<a> </a>' tag in React

// method to render = add element to the root
// (what to inject, where to inject)
function customRender(reactElement, container) {
  // create the element using DOM
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  /*
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  */
  for (let prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  //Injecting
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Visit Google",
};

const container = document.querySelector("#root");

customRender(reactElement, container);
