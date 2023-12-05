import { useState } from "react";
import { TodoForm } from "./components/TodoForm.jsx";
import { TodoList } from "./components/TodoList.jsx";
import "./styles/style.css";

export default function App() {
  
  const [todos, setTodos] = useState([]); // 默认 todos 是一个空数组

  /**
   * 如果想要 modify the exisiting data
   * 需要传递一个函数给 useState => setTodos((currentTodos => {...}))
   * 这个函数要`return` whatever value you want the new state to be
   * 这个函数还要传递一个参数 => current value of state
   * 
   * 按照平时的逻辑应该是 setTodos[todos]
   * 但是不能修改`todos`这个变量（因为它是`const`的）
   * 所以展开它 => `...todos` => 会得到一个 brand new array
   * `id` - `crypto.randomUUID`会随机生成一个 ID 数
   * `title` - title 是新添加的待办事项item
   * `completed - 新添加的待办事项的`completed`状态是`false`的，未完成
   * 
   * 总结：任何时候你想要使用现有的数据，则需要传递函数
   * 否则可以像`setNewItem(e.target.value)`直接传递数据
   */
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  /**
   * 
   * 每次点击这个 input 的时候
   * 如果原来是被选中的，点击后改为未被选中
   * 如果原来是未被选中的，点击后改为选中
   * 包含这两种情况 => toggle
   */

  function toggleTodo(id, completed) {
    // 更新`todos`数组中刚刚传入的 todo 的 id，来更新 complated 的状态
    // `map()`遍历数组中的每一个元素，并对每个元素进行处理，最终返回一个新数组
    setTodos((currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) { // 检查传进来的 todo 和数组中的 todo 有没有 match 的
          return {...todo, completed}; // 更改 match 的 todo 的 complete 状态
        }
        return todo; // 如果没有 match 的，则返回没有任何更改的数组
      });
    }))
  }

  function deleteTodo(id) {
    setTodos((currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    }))
  }

  /**
   * 页面
   */
  return (
    <div className="todo-wrapper">
      <TodoForm onSubmit={addTodo} />
      <h1 className="title">To Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}
