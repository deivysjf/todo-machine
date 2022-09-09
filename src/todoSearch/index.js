import React from "react";
import { TodoContext } from "../TodoContext";
import './todoSearch.css';



function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return (
        <div>
            <input
                className="TodoSearch"
                placeholder="Busca tu tarea"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <p>{searchValue}</p>
        </div>
    )
}

export { TodoSearch };