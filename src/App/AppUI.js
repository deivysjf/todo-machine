import React from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoButton } from "../createTodoButton";
import { TodoCounter } from "../todoCounter";
import { TodoItem } from "../todoItem";
import { TodoList } from "../todoList";
import { TodoSearch } from "../todoSearch";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <div className=''>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleted={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))
                }
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton setOpenModal={setOpenModal} />
        </div>
    )
}

export { AppUI }