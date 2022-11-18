import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText){
        
    setItems(prevItems => (
      [...prevItems, inputText]
    ));
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => 
          {return index !== id;})
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem}/>
      {/* we need an id to know which item wants to be deleted */}
      <div>
        <ul>
          {items.map((item, index) => 
            <ToDoItem 
              key={index}
              id={index}
              content={item}
              onChecked={deleteItem}
            />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
