import React from 'react'
import OpenTodos from "./components/OpenTodos";
import DoneTodos from "./components/DoneTodos";
import AddTodo from "./components/AddTodo";

// CSS style for done items
const done = {
    textDecoration: 'line-through',
    color: 'lightgrey'
}

const App = () => {
    // This is the 'smart' component. It holds the state and the logic
    const emptyTodo = {
        title: '',
        done: false,
    }
    const [todo, setTodo] = React.useState(emptyTodo)
    const [todos, setTodos] = React.useState([])
    const [showDone, setShowDone] = React.useState(true)

    const addTodo = () => {
        const newTodo = {
            title: todo.title,
            done: false
        }
        setTodos([...todos, newTodo])
        setTodo(emptyTodo)
    }

    const updateTodo = (e) => {
        setTodo({...todo, title: e.target.value})
    }

    const deleteTodo = (item) => {
        setTodos([...todos.filter(t => t !== item)])
    }

    const toggleComplete = todo => {
        todo.done = !todo.done;
        setTodos([...todos])
    }

    const toggleShowDoneTodos = () => {
        setShowDone(!showDone)
    }

    // The User Interface
    return (
        <div className="container">
            <h1>React Todo-app</h1>
            {/*Create a controlled component to add the item */}
            <AddTodo todo={todo} addTodo={addTodo} updateTodo={updateTodo}/>

            {/*Show or hide done todos*/}
            <label>
                <input type="checkbox"
                       checked={showDone}
                       onChange={toggleShowDoneTodos}
                />
                Show done Todos
            </label>

            {/*Render open todos*/}
            {
                <OpenTodos todos={todos}
                           deleteTodo={deleteTodo}
                           toggleComplete={toggleComplete}/>
            }
            {/*Render done todos*/}
            {
                showDone &&
                <DoneTodos toggleComplete={toggleComplete}
                           deleteTodo={deleteTodo}
                           done={done}
                           todos={todos}/>
            }
        </div>
    )
}
export default App;
