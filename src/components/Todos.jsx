import React, { useContext } from "react"
import { useState } from "react"
import { Credntials } from "../App";
import { handleErrors } from "../pages/Login";

function Todos() {
    const [todos, setTodos] = useState([]);

    const [text, setText] = useState("");

    const [credntials, setCredentials] = useContext(Credntials);


    const addTodo = (e) => {
        e.preventDefault();
        const newTodos = [...todos, {
            text: text,
            checked: false
        }];
        if (text.length > 0 ) {
            setTodos(
                [...todos,
                {
                    text: text,
                    checked: false
                }])
            
            
            setText("");
        }
        persist(newTodos);
    }

    const toggleTodo = (index) => {
        const newTodoList = [...todos];
        newTodoList[index].checked = !newTodoList[index].checked
        setTodos(newTodoList)
    }
    
    const persist = (newTodos) => {
        fetch(`http://localhost:3000/todos`, {
            method: 'POST',
            headers: {
                "content-type" : "application/json",
                'Authorization' : `Basic ${credntials.username}:${credntials.password}`
            },
            body: JSON.stringify(newTodos),
        }).then(() => {});
        
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                <input id="checkbox1" type="checkbox" onChange={() => toggleTodo(index)} />
                <label>{todo.text}</label>
                </div>
            ))}
            
            <br />
            <form onSubmit={addTodo}>
                <input 
                    onChange={(e) => setText(e.target.value)} 
                    type="text" 
                    value={text}
                >
                </input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Todos