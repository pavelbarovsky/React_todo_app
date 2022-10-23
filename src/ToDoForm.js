import { useState } from 'react'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    // если значение меняется из события, то отправляем значение
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    // получаем событие и привентим по умолчанию.
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("") // обнуление плэйсхолдера
    }

    // отправление по энтеру
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}> {/*срабатывание скрипта при отправке формы*/}
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter your tasks..."
            />        
            <button>Add</button>
        </form>
    )
}

export default ToDoForm