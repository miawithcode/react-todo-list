import { useState } from "react";
import "../styles/style.css";
import "../styles/todoform.css";

/**
 * 1. 当 input 框里的内容发生改变时，更新它的 value => <input value={newItem} />
 * 2. 在 React 中处理 EventListener => <input onChange />
 * 3. 在 JavaScript 中改变 input 中的 value 事件是 onInput
 * 4. 但在 React 中，每一次在 input 中键入一个键，都是 onChange
 * 5. 处理在 input 中改变值时，添加 EventListener 要执行的代码
 *    <input onChange = { e => setNewItem( e.taget.value) } />
 *    `e.taget.value` 是获取当前输入框的值 -> 用`setNewItem`将当前输入框的值赋值给`newItem`
 *    如果不设置这行代码，input 中的值永远都是`newItem`，而`newItem`里的值永远都是`useState("")`中的设置的空字符串
 *
 */

export function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState(""); // 默认 input 里的内容是空的
  //setNewItem("New to do"); // setNewItem 会把新的字符串赋值给`newItem`，然后用`newItem`里的新值来重新加载整个组件

  function handleSubmit(e) {
    // 表单提交是一个事件，所以传入事件（`e`）作为参数
    e.preventDefault(); // 阻止表单默认的提交行为：表单提交时，刷新页面
    if(newItem === "") return

    // 怎么把 App.js 中的函数`addTodo()`用到`TodoForm`里 => props 
    // => 在 App.js 中的`<TodoForm />`改成`<TodoForm onSubmit={addTodo} />`，
    // 其中`onSubmit`是自己定义的，可以是任何值，也就是 props，把 addTodo 传了进来
    // 因为传了 addTodo ，所以`TodoForm`要接受参数`props`，也就是 onSubmit，
    // addTodo 就是 onSubmit 这个 props 传进来的
    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-row">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} // 不管什么时候我改变了 input 里的值，获取 input 里的新值，复制给`newItem`，并重新加载组件 -> 这保证了更新页面中每一个调用`newItem`的地方的`newItem`的值
          type="text"
          id="item"
          placeholder="What do you want to accomplish today?"
        />
      </div>
      <button className="addBtn">Add</button>
    </form>
  );
}
