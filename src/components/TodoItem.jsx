import React, { useState } from 'react';
import { useTodo } from '../contexts/index.js'; // Ensure path is correct

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo); // todo.todo contains the text
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        // Corrected updateTodo call to match the updated App.jsx's updateTodo signature
        updateTodo(todo.id, { todo: todoMsg }); // Pass only the updated 'todo' text property
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        // CRITICAL FIX: Pass the ID, not the whole todo object
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`
                flex items-center justify-between
                w-full
                rounded-xl px-5 py-3 gap-x-3
                shadow-lg
                text-white // Ensure text color is white for better contrast on glassmorphism
                transition-all duration-300 ease-in-out
                ${
                todo.completed
                    ? "bg-gradient-to-br from-green-300/15 to-green-500/10 border border-green-300/20" // Completed look
                    : "bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20" // Glassmorphism look
            }
            `}
        >
            <input
                type="checkbox"
                className="cursor-pointer appearance-none w-5 h-5 rounded-md border-2 border-white/50 bg-white/10 checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition-all duration-200 ease-in-out"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`
                    flex-grow
                    outline-none bg-transparent rounded-lg
                    px-2 py-1
                    text-lg // Slightly larger text
                    ${isTodoEditable ? "border border-blue-300 px-2" : "border-transparent"}
                    ${todo.completed ? "line-through text-gray-300" : "text-white"} // Darker strikethrough for contrast
                `}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="
                    ml-2 inline-flex w-8 h-8 rounded-full // Make buttons round
                    text-sm border border-white/30 justify-center items-center
                    bg-white/20 hover:bg-white/30 // Glass-like button background
                    shrink-0
                    disabled:opacity-40 disabled:cursor-not-allowed // Adjusted disabled opacity
                    transition-all duration-200 ease-in-out
                "
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✍️"} {/* Updated icons for clarity: Save / Edit */}
            </button>
            {/* Delete Todo Button */}
            <button
                className="
                    ml-2 inline-flex w-8 h-8 rounded-full // Make buttons round
                    text-sm border border-white/30 justify-center items-center
                    bg-red-500/20 hover:bg-red-500/40 // Red tinted glass-like button
                    shrink-0
                    transition-all duration-200 ease-in-out
                "
                onClick={() => deleteTodo(todo.id)}
            >
                🗑️ {/* Delete icon */}
            </button>
        </div>
    );
}

export default TodoItem;