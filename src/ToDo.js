import {TiDeleteOutline} from 'react-icons/ti'


/*создание карточки с задачей*/
function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                /*если тру - добавим два класса, фолс - добавим один класс*/
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                {/*иконка удалить*/}
                <TiDeleteOutline/> 
            </div>
        </div>
    )
}

export default ToDo