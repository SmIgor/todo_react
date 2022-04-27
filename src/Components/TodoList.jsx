import { useEffect, useState } from 'react';
import TaskCreationForm from './TaskCreationForm';
import TodoListItem from './TodoListItem';
import { getData, postData, putData, deleteData } from '../gateway';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const tasks = await getData();
      setTasks(tasks);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCreate = async text => {
    try {
      await postData({ text, done: false });
      const newTasksList = await getData();
      setTasks(newTasksList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxClick = async taskToUpdate => {
    const updatedtask = { ...taskToUpdate, done: !taskToUpdate.done };

    const updatedTasks = tasks.map(task => {
      if (task.id === taskToUpdate.id) {
        return updatedtask;
      }
      return task;
    });

    try {
      await putData(updatedtask);
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTaskDelete = async id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    try {
      await deleteData(id);
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
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
              task={task}
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
