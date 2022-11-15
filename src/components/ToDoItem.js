import React, {useState} from "react";

function ToDoItem(props){
    const [itemClicked, setItemClicked] = useState(false);

    function strikeItem(){
        setItemClicked(prevValue => !prevValue);
    }

    document.querySelector("li").style.textDecoration = itemClicked ? "line-through" : null;

    return(<li onClick={strikeItem}>{props.content}</li>);
}

export default ToDoItem;