import List from "./listKeys";

function ReuseList() {
  let fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 45 },
    { id: 3, name: "Mango", calories: 105 },
    { id: 4, name: "Orange", calories: 37 },
  ];

  let vegetables = [
    { id: 5, name: "Carrot", calories: 25 },
    { id: 6, name: "Potato", calories: 110 },
    { id: 7, name: "Corn", calories: 63 },
    { id: 8, name: "Broccoli", calories: 50 },
  ];
  return (
    <>
      <List item={fruits} category="fruits" />
      <List item={vegetables} category="vegetables" />
    </>
  );
}

export default ReuseList;
