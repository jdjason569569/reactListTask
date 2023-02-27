import {useState} from 'react';
import Todo from './todo';
import "./todoApp.css";

export default function TodoApp() {

    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (e) =>{
        e.preventDefault();
        setTitle(e.target.value)

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        setTodo([...todo , newTodo]);
        setTitle("");
    }

    const onUpdate = (id, value) =>{
         //const temp = [...todo];
         const t = todo.find(v => v.id === id)
         t.title = value;
         setTodo(todo);
         console.log('--> ',todo);
         console.log('update');
    }

    const deleteMethod = (id) =>{
        const todoFilter = todo.filter((element) => element.id !== id);
        setTodo(todoFilter);
    }

    return(
    <div className="todoContainer">
       <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title}/>
        <input type="submit" value="Crete task" className="buttonCreate" onClick={handleSubmit}/>
       </form>
       <div className='todosContainer'>
        {todo.map(element=>(
            <Todo key={element.id} element = {element} onUpdate={onUpdate} deleteMethod = {deleteMethod}></Todo>
        ))}
       </div>
    </div>
    )
}