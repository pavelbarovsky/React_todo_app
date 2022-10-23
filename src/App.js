import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function App() {
    const [todos, setTodos] = useState([])    // массив задач

    const addTask = (userInput) => {    // добавить задачу
      // если поле пустое, то ничего не добавлять
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }
          setTodos([...todos, newItem]) // три точки - элементы старого массива. + новый айтем
      }
  }

  const removeTask = (id) => {    // удалить задачу
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {    // 
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  return (
    <div className='pos'>
    <div className="App">
      <header className='counter'>
        <h1>Todo list: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {/*вывод элементов списка*/}
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })}
    </div>
    </div>
  );
}

export default App;
