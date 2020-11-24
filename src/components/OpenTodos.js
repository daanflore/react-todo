import React from 'react';

const OpenTodos = ({todos, toggleComplete, deleteTodo}) => {

    return (
        todos.filter(t => !t.done).length > 0 &&
        <>
            <h2>Open todos: </h2>
            <ul className="list-group">
                {todos.map((todo, index) => (
                    !todo.done ?
                        <li className="list-group-item" key={index}>
                            <label>
                                <input type="checkbox"
                                       checked={todo.done}
                                       onChange={() => toggleComplete(todo)}
                                />
                                &nbsp;
                                {todo.title}
                            </label>
                            <button
                                onClick={() => deleteTodo(todo)}
                                className="btn btn-danger btn-sm float-right">
                                Delete
                            </button>
                        </li>
                        : null
                ))}
            </ul>
        </>
    );
}

export default OpenTodos;
