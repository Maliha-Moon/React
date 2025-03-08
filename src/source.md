## ImportExport

1️⃣ Default Export: A file can have only one default export
Default Import: When importing a default export, you can name the import whatever you like.

export default App;
import App from './folder/file'

2️⃣ Named Export: A file can have multiple Named exports.
📍export const App = () => {}
📍export const MyApp = () => {}

Named Import: When importing a named export, the import name must match with the import name exactly.
⚠️Named Import must enclosed with curly braces {}

📍import {App,MyApp,..} from './folder/file'

3️⃣ Combined Export: Default + Named
📍export default App;
📍export const App = () => {}
📍export const MyApp = () => {}

Combined Import: Default + Named
📍import App, {App,MyApp,..} from './folder/file'

## Component

React Component
❓ Is javascript functions that return markup.
-> Must start with uppercase letter.

## Fragments tag

❓fragments tag allow components to return multiple elements without adding extra nodes(div) to the DOM tree.

❗component can return only one element/jsx (Markup syntax)
To return more than 1 element/jsx,
❕use <> jsx fragment tag/ empty tag </>

❓Why can't we return multiple lements at the same time?

- after jsx is compiled, it's converted into js object &
  you can't return multiple js object at the same time

  ❗React cannot understand HTML
  -> So the HTML syntax is parsed,
  then converted into a tree / react element

## Dynamic values

you can use js variables inside jsx using curly braces {}

## Exception

React does not render "False","Null","Undefined", "NaN" in the DOM. These values will result nothing in the display.

If the value is `0` or empty string `""`, then it throws exception

## Key.id

❗ <li key={fruit.id}>{fruit.name}</li>
-> each <li> element gets a unique key/id

## Props

❓shorthand of 'properties'
❓used to pass data from parent component to child component
➡️each prop is passed as a separate attribute from a parent component to a child component.

## Props destructuring

❓extract specified properties from 'props' object
➡️ no need to write props.

// {var_name} -> evaluated expression [Variable inject]
// reactElement

## onChange={(e) => console.log(e.target.value)}

e = event object
target = component
value = current value of the component

## useState

❓State is a way to store and manage data that can change over time in a component.

❓Why React?

- It's because when normal variables are changed, React.js don't know it's going to be changed.
- And React.js should respond and update DOM based on that
- those values are already rendered in the DOM, there is no way they will be re-rendered again,
- For that React.js provide a function called 'useState'
- this type of function which starts with 'use' is called [hook].

const[count,setCount] = useState(value/ {Object}/ [array])
➡️ count = Variable that store current value [assign with initial value]
➡️ setCount = setter function that updates state value

❗useState() returns array
