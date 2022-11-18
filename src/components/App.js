import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

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
      <InputArea 
        onChanged={handleChange}
        text={inputText}
        onAddButtonClick={addItem}
      />
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
