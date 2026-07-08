// import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button type="button" className="btn btn-danger btn-sm my-3" onClick={() => onDelete(todo)}>Delete</button>

    </div>
  )
}

export default TodoItem 