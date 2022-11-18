import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newText = event.target.value;
    setInputText(newText);
  }

  function addItem(){
    setItems(prevItems => (
      [...prevItems, inputText]
    ));
    setInputText("");
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
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
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
