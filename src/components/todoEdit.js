import { useState } from "react";
import './todoEdit.css'

export default function TodoEdit({element, handleClickUpdate}) {

    const [newValue, setnewValue] = useState(element.title)

    const handleSubmit = (e) =>{
       e.preventDefault();
    }

    const handleChange = (e) =>{
        setnewValue(e.target.value);
    }

    return(
        <form className="todoEditForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput"  value={newValue} onChange={handleChange}/>
            <button className="button" onClick={() => handleClickUpdate(element.id, newValue)}>Update</button>
        </form>
    )
}