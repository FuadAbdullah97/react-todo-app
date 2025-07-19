// components/TodoForm.jsx
import React, {useState} from 'react';
import {useTodo} from "../contexts/index.js";

function TodoForm() { // Removed 'props' as it's not used

    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({todo, completed : false})
        setTodo("")
    }
    return (
        <form onSubmit={add} className="flex rounded-lg overflow-hidden border border-white/30 shadow-inner"> {/* Added rounded and border to the form container */}
            <input
                type="text"
                placeholder="Write your next task..." // Updated placeholder
                className="
                    w-full px-5 py-3
                    outline-none
                    bg-white/20 text-white
                    placeholder-white/70
                    focus:bg-white/30 focus:ring-2 focus:ring-blue-300
                    transition-all duration-200 ease-in-out
                "
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="
                    px-5 py-3
                    border-b-gray-700 text-white font-semibold
                    shrink-0
                    hover:border-b-gray-900
                    focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75
                    transition-colors duration-200 ease-in-out
                ">
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;