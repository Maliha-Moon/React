import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import First from "./first";

function App() {
  //  ❗component can return only one element/jsx (Markup syntax)
  //    To return more than 1 element/jsx,
  //  ❕use <> jsx fragment tag/ empty tag </>

  return (
    // jsx syntax
    <>
      <h1>Hello React</h1>
      <First />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
        aspernatur debitis voluptates a nisi incidunt ab laboriosam mollitia
        neque dolores expedita necessitatibus quia vero quibusdam velit,
        voluptas officia numquam.
      </p>
    </>
  );
}

export default App;
