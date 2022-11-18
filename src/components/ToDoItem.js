import React, {useState} from "react";

function ToDoItem(props){
    // pass the id of the item to the parent
    return(<li onClick={() => props.onChecked(props.id)}>{props.content}</li>);
}

export default ToDoItem;

// stike through the item that has been clicked
// function ToDoItem(props){
//     const [itemClicked, setItemClicked] = useState(false);

//     function strikeItem(){
//         setItemClicked(prevValue => !prevValue);
//     }

//     document.querySelector("li").style.textDecoration = itemClicked ? "line-through" : null;

//     return(<li onClick={strikeItem}>{props.content}</li>);
// }