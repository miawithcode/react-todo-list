import { TodoItem } from "./TodoItem.jsx";
import "../styles/style.css";
import "../styles/todolist.css";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <p className="no-todo-status">No todos today.</p>}
      {/* loop through the todos and render them out => map
          `todo.map`会返回一个数组
          返回一个数组元素时，每个元素的最高层要有`key` prop => key={todos.id} */}
      {todos.map( todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
