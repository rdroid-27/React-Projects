import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems=[{
    name: 'Buy Milk',
    dueDate: '17/1/2024'
  },
  {
    name: 'Go to college',
    dueDate: '18/1/2024'
  },{
    name: 'Eat Food',
    dueDate: 'Right Now'
  }];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
      
      
    </center>
  );
}

export default App;
