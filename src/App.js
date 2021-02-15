import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import MeteorDiagram from './MeteorDiagram';
import useTodoState from './useTodoState';
import './App.css';

const App = () => {
  const initTodos = () => { 
    let todos = JSON.parse(window.localStorage.getItem('todos')) || [];
    return todos.map((t) => { 
      const time = new Date(t.time);
      return {...t, startDate: time};
    });
  };
  const { todos, addTodo, deleteTodo, toggleComplete } = useTodoState(initTodos);

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
