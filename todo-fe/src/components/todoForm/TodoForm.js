import React, {useState} from 'react'
import './TodoForm.css';

const TodoForm = ({addTodo}) =>{
    const [value, setvalue] = useState('');

    const handleChange = (e) => {   
        setvalue(e.target.value);         
    };

    const handleSubmit = (e) => {
        e.preventDefault();    
        if (!value)         
            return;
        addTodo(value);
        setvalue('');  
    };

    return(
        <div className={"container"}>
            <div className="app-title">TODO MERN APP</div>
            <form onSubmit={handleSubmit} className={"form-group"}>
                <input className={"form-control"} type={"text"} placeholder={"Add a ToDo"} value={value} onChange={handleChange}/>
                <button className={"btn"} type={"submit"}>Add</button>
            </form>
        </div>
    )
};

export default TodoForm;