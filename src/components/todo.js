import { useState } from "react"
import TodoEdit from "./todoEdit";
import TodoElement from "./todoElement";
import './todo.css'


export default function Todo({element, onUpdate, deleteMethod}) {
    
    const [isEdit, setisEdit] = useState(false)

    const handleIsEdit = () =>{
       setisEdit(true);
    }

    const handleClickUpdate = (id, value) =>{
        setisEdit(false);
        onUpdate(id, value);
    }

    const deleteElement = (id) =>{
      deleteMethod(id);
    }
    
    return (
    <div className="todo">
      {isEdit ? <TodoEdit element={element}  handleClickUpdate = {handleClickUpdate}></TodoEdit> 
      :
      (<TodoElement element={element} handleIsEdit = {handleIsEdit} deleteElement = {deleteElement}></TodoElement>)}
    </div>
    
    ) 
}