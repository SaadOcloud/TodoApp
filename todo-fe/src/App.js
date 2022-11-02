import React, {useState} from 'react';
import './App.css';
import TodoForm from "./components/todoForm/TodoForm";
import Todos from "./components/todos/todos";

function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, {text:todo}] );
    };
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
        if(newTodos[index].isCompleted){
            moveToCompleted(index);
        }
        
    };

    const moveToCompleted = (todo) => {
        const newTodos = [...todos];
        newTodos.splice(newTodos.indexOf(todo), 1);
        setTodos(newTodos);
    };

    const editTitle = (index, title) => {
        const newTodos = [...todos];
        newTodos[index].text = title;
        setTodos(newTodos);
    };

    return (
          <div className="top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm addTodo={addTodo} />
                      <div className="todoApp">
                      <div className="todolist">
                        <h1>Todo List</h1>
                      <Todos todos={todos} markComplete={markComplete} editTitle={editTitle} deleteTodo={deleteTodo}/>
                      </div>
                      <div className="completelist">
                        <h1>Complete List</h1>
                      <Todos todos={todos} markComplete={markComplete} editTitle={editTitle} deleteTodo={deleteTodo}/>
                      </div>
                      </div>    

                  </div>
              </div>
          </div>
          
    );
}

export default App;