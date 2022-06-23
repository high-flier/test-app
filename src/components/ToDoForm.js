import React, { useState } from "react";

export const ToDoForm = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter input here"
        value={input}
        className="todo-input"
        name="text"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className='todo-button'>Click to Add</button>
    </form>
  );
};
export default ToDoForm;
