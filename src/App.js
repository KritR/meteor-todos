import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import MeteorDiagram from './MeteorDiagram';
import useTodoState from './useTodoState';
import './App.css';

const App = () => {
  /*const initTodos = () => { 
    const todos = JSON.parse(window.localStorage.getItem('todos')) || [];
  };*/
  const { todos, addTodo, deleteTodo, toggleComplete } = useTodoState([]);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">

      <div className="App-sidebar">
        <Typography component="h1" variant="h2">
          Todos
        </Typography>

        <TodoForm
          saveTodo={addTodo}
        />

        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </div>
      <MeteorDiagram todos={todos} />
    </div>
  );
};

export default App;
