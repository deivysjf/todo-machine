import React from "react";
import './todoItem.css'


function TodoItem(props) {

    return (
        <li className={`todoItem ${props.completed && 'todoItem--active'}`} >
            <span
                className="todoItem-check"
                onClick={props.onCompleted}

            >{props.completed ? '  ✔' : '⊙'}</span>
            <p className={`item-text ${props.completed && 'item-text-active'}`} >{props.text}</p>
            <span
                className="Icon-delete"
                onClick={props.onDelete}
            >X</span>
        </li>

    )
}

export { TodoItem };