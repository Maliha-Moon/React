import React from "react";

// let fruits = ["Banana", "Apple", "Mango", "Orange"];

// array of objects
let fruits = [
  { id: 1, name: "Apple", calories: 95 },
  { id: 2, name: "Banana", calories: 45 },
  { id: 3, name: "Mango", calories: 105 },
  { id: 4, name: "Orange", calories: 37 },
];
function list() {
  //   Array of list items
  // ->  Convert an array into list

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  //   filter array of objetcs
  const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);

  const lowCalFruitList = lowCalFruit.map((lowCalFruits) => (
    <li key={lowCalFruits.id}>
      {lowCalFruits.name}: &nbsp; <b>{lowCalFruits.calories}</b>
    </li>
  ));

  // return array of list using list tag
  return <ul>{lowCalFruitList}</ul>;
}

export default list;
