import { useState } from 'react';
import TaskCreationForm from './TaskCreationForm';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'loremloremloremloremlorem', done: false },
    { id: 2, text: '123', done: false },
    { id: 3, text: 'dada', done: false },
    { id: 4, text: 'XD', done: true },
  ]);

  const handleCreate = text => {
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const handleCheckboxClick = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleTaskDelete = id => {
    setTasks([...tasks].filter(task => task.id !== id));
  };

  return (
    <>
      <h1 className="title">Todo list</h1>
      <div className="todo-list">
        <TaskCreationForm handleCreate={handleCreate} />
        <ul>
          {tasks.map(task => (
            <TodoListItem
              key={task.id}
              {...task}
              handleCheckboxClick={handleCheckboxClick}
              handleTaskDelete={handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
