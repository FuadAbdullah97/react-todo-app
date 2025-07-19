// App.jsx
import React, {useEffect, useState} from 'react'
import {TodoProvider} from "./contexts/index.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx"; // Ensure this import is correct based on your index.js or direct file

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoObj)=> { // Corrected parameter name
        setTodos((prev)=> [{id:Date.now(),...todoObj}, ...prev]) // Corrected addTodo logic
    }

    const updateTodo = (id, todoObj) => { // Renamed 'todo' to 'todoObj' for clarity
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todoObj } : prevTodo))); // Improved for partial updates
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo)=>
                prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo // Corrected comparison
            )
        )
    }

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) // Renamed for clarity
        if (storedTodos && Array.isArray(storedTodos) && storedTodos.length > 0) { // Added Array.isArray check for robustness
            setTodos(storedTodos)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

    return (
        <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            {/* Main background container with a gradient or image */}
            <div
                className="min-h-screen py-8 flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your desired image URL
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed", // Keeps background fixed during scroll
                }}
            >
                {/* The main container for your Todo App - apply glassmorphism here */}
                <div className="
                w-full max-w-2xl mx-auto
                rounded-2xl px-4 py-8 text-white
                bg-white/10 backdrop-blur-lg backdrop-saturate-150
                border border-white/20 shadow-xl
                transform transition-all duration-300
                hover:shadow-2xl hover:border-white/30
            ">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 mt-2 tracking-wide text-shadow-md">
                    <span className="bg-clip-text text-white font-semibold ">
                        Manage Your Tasks
                    </span>
                    </h1>
                    <div className="mb-6"> {/* Increased margin for better spacing */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-4"> {/* Increased gap */}
                        {/* Conditional rendering for no todos */}
                        {todos.length === 0 ? (
                            <p className="w-full text-center text-gray-300 text-lg py-4">No tasks yet! Add some to get started.</p>
                        ) : (
                            todos.map((todo) => (
                                <div key={todo.id} className={'w-full'}>
                                    <TodoItem todo={todo} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App