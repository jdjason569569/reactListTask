import './todoElement.css'

export default function TodoElement({element, handleIsEdit, deleteElement}) {
    return(
        <div className="todoInfo">
           <span className="todoTitle">{element.title}</span>
             <button className="botton" onClick={handleIsEdit}>Edit</button>
             <button className="bottonDelete" onClick={() => deleteElement(element.id)}>Delete</button>
        </div>
    )
}