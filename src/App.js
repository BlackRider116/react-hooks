import React, { useState, useEffect, useReducer } from 'react'
import TodoList from './TodoList'
import { Context } from './context'
import reducer, { initialState } from './reducer'


export default function App() {

  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || initialState)
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = ev => {
    if (ev.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle('')
    }
  }

  return (
    <Context.Provider value={{ dispatch }} >
      <div className="container">
        <h4>Список задач</h4>

        <div className="input-field">
          <input type="text" value={todoTitle} onChange={ev => setTodoTitle(ev.target.value)} onKeyPress={addTodo} />
          <label>Введите задание</label>
        </div>

        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}