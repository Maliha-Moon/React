import React from "react";

// let fruits = ["Banana", "Apple", "Mango", "Orange"];

function List(props) {
  const itemList = props.item;
  const category = props.category;
  //   Array of list items
  // ->  Convert an array into list
  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  //   filter array of objetcs
  const lowCalFruit = itemList.filter((fruit) => fruit.calories < 100);

  const lowCalFruitList = lowCalFruit.map((lowCalFruits) => (
    <li key={lowCalFruits.id}>
      {lowCalFruits.name}: &nbsp; <b>{lowCalFruits.calories}</b>
    </li>
  ));

  // return array of list using list tag
  return (
    <>
      <h2>Category: {category}</h2> <ul>{listItems}</ul>
    </>
  );
}

export default List;
