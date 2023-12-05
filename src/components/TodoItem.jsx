import "../styles/todolist.css";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
  <li>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>

    {/* onClick不能写成onClick={deleteTodo(todo.id)}
    上面这个形式是在传递`deleteTodo`的结果
    calling this function right away and then passing the return value of that function on click
    而是要写成箭头函数的形式 onClick={()=> deleteTodo(id)}*/}

    <button onClick={() => deleteTodo(id)} className="btn-danger">
      delete
    </button>
  </li>
  )
}
