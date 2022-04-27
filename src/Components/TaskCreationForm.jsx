import { useState } from 'react';

const TaskCreationForm = ({ handleCreate }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="todo-list__task-creation task-creation">
      <input
        className="task-creation__input"
        type="text"
        placeholder="Task text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="btn task-creation__btn"
        onClick={() => {
          if (!inputValue) return;
          handleCreate(inputValue);
          setInputValue('');
        }}
      >
        Create
      </button>
    </div>
  );
};

export default TaskCreationForm;
