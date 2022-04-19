const TodoListItem = ({
  id,
  text,
  done,
  handleCheckboxClick,
  handleTaskDelete,
}) => {
  const classes = `todo-list__item list-item ${done ? 'list-item_done' : ''}`;
  return (
    <li className={classes}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        name="done"
        checked={done}
        onChange={() => handleCheckboxClick(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__deleteBtn"
        onClick={() => handleTaskDelete(id)}
      ></button>
    </li>
  );
};

export default TodoListItem;
