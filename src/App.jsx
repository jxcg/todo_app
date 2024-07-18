// Component
import './styles.css'
import { useState } from 'react'
export default function App() {
  const [newItem, setNewItem] = useState("") // declaring my newItem has an input of empty string
  // value = newItem, onChange -> triggered when there is any change within the input field
  const [todos, setTodos] = useState([]) 
  // any component that needs to be re rendered to be updated needs to be inside of state
  function handleSubmit(e) {
    e.preventDefault()
    
    setTodos(currentTodos => {
      return [...currentTodos,{id : crypto.randomUUID(), title: newItem, completed: false}]
    })
  }
  console.log(todos)

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}

        }
      })
    })
  }

  return <>
    <h1 className='header'>Todo App</h1>

  <form onSubmit={handleSubmit}className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item' className='new-item-label'>New Item</label>
      <input value={newItem} onChange={e=> setNewItem(e.target.value)} type='text' id='item'></input>

    </div>
    <button className='btn'>Add</button>
  </form>
  <h2>List</h2>
  <ul className='list'>
    {todos.map(todo => {
      return <li key={todo.id}>
      <label>
        <input type='checkbox' checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
    })}

  </ul>
  </>
}

