import { useState } from "react";
import Sherlock from 'sherlockjs';

const useTodos = (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText) => {
      const priority = (todoText.match(/!/g) || []).length + 1;
      const todoData = Sherlock.parse(todoText);
      todoData.isComplete = false;
      todoData.priority = priority;
      todoData.startDate = todoData.startDate || new Date();
      todoData.time = todoData.startDate.getTime();
      setTodos([...todos, todoData]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
    toggleComplete: (todoIndex) => {
      const newTodos = todos.map((t, index) => index !== todoIndex ? t : {...t, isComplete: !t.isComplete});
      // TODO Get sorting working 
      // .sort((a, b) => a.isComplete - b.isComplete);
      setTodos(newTodos);
    }
  };
};

export default useTodos;
