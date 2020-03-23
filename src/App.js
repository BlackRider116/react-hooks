import React, { useState } from 'react'
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Купить хлеб и молоко', completed: true },
    { id: 2, title: 'Оплатить коммуналку', completed: false },
    { id: 3, title: 'Забрать долг у Васи', completed: false },
  ])

  const [todoTitle, setTodoTitle] = useState('')

  const addTodo = ev => {
    if (ev.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: todos[todos.length - 1].id + 1,
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('')
    }
  }

  return (
    <div className="container">
      <h4>Список дел</h4>

      <div className="input-field">
        <input type="text" value={todoTitle} onChange={ev => setTodoTitle(ev.target.value)} onKeyPress={addTodo} />
        {/* <button onClick={addTodo} >Добавить</button> */}
        <label>Введите задачу</label>
      </div>

      <TodoList todos={todos} />
    </div>
  );
}