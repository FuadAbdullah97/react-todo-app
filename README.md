# Modern Todo App

A simple yet elegant Todo application built with React, featuring a modern Glassmorphism UI and persistent data storage using `localStorage`. This app allows users to add, update, delete, and toggle the completion status of their tasks, with all changes saved locally in the browser.

## ✨ Features

* **Add Todos:** Easily add new tasks to your list.

* **Edit Todos:** Modify the text of existing tasks.

* **Delete Todos:** Remove tasks you no longer need.

* **Toggle Completion:** Mark tasks as complete or incomplete.

* **Persistent Storage:** All your todos are automatically saved in your browser's local storage, so they persist even after closing and reopening the browser.

* **Modern UI:** A sleek Glassmorphism design with a dynamic background, providing a visually appealing and intuitive user experience.

* **Responsive Design:** Adapts to various screen sizes for seamless use on desktop and mobile devices.

## 🚀 Technologies Used

* **React:** A JavaScript library for building user interfaces.

* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

* **React Context API:** For efficient state management across components.

* **Local Storage:** Browser API for client-side data persistence.

* **JavaScript (ES6+):** Core language for application logic.

## 🛠️ Setup and Installation

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository (if applicable):**

    ```
    git clone <your-repository-url>
    cd modern-todo-app # or whatever your project folder is named
    ```

    (If you received this code directly, skip this step and navigate to your project directory.)

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or Yarn) installed.

    ```
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**

    ```
    npm run dev
    # or
    yarn dev
    ```

    This will typically open the application in your browser at `http://localhost:5173` (or a similar port).

## 💡 Usage

* **Adding a Todo:** Type your task in the input field at the top and click the "Add Task" button or press Enter.

* **Editing a Todo:** Click the `✍️` (edit) icon next to a todo item. The text field will become editable. Make your changes and click the `💾` (save) icon to confirm.

* **Deleting a Todo:** Click the `🗑️` (delete) icon next to a todo item.

* **Marking as Complete/Incomplete:** Click the checkbox next to a todo item to toggle its completion status. Completed tasks will have a subtle green background and strikethrough text.

## 📂 Project Structure (Key Files)

* `src/App.jsx`: The main application component, managing the global todo state and context.

* `src/contexts/index.js`: Defines the `TodoContext` and `TodoProvider` for state management.

* `src/components/TodoForm.jsx`: Component for adding new todo items.

* `src/components/TodoItem.jsx`: Component for displaying and interacting with individual todo items (edit, delete, toggle).

* `public/`: Contains static assets like your background image. (Ensure your chosen background image is placed here or referenced correctly from an external URL).

## 🔮 Future Improvements

* **Filtering/Sorting:** Add options to filter todos (e.g., all, active, completed) or sort them (e.g., by date, alphabetically).

* **Drag-and-Drop Reordering:** Allow users to reorder tasks by dragging them.

* **Animations:** Implement more subtle animations for adding/deleting/updating tasks.

* **User Authentication:** Expand to support multiple users by integrating a backend and database (e.g., Firebase Firestore).

* **Categories/Tags:** Allow users to categorize their todos.

## 📄 License

This project is open-source and available under the MIT License.
