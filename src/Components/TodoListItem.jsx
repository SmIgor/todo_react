const TodoListItem = ({ task, handleCheckboxClick, handleTaskDelete }) => {
  const classes = `todo-list__item list-item ${
    task.done ? 'list-item_done' : ''
  }`;
  return (
    <li className={classes}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        name="done"
        checked={task.done}
        onChange={() => handleCheckboxClick(task)}
      />
      <span className="list-item__text">{task.text}</span>
      <button
        className="list-item__deleteBtn"
        onClick={() => handleTaskDelete(task.id)}
      ></button>
    </li>
  );
};

export default TodoListItem;
