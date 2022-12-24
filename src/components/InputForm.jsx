import React, { useState } from 'react'

export const InputForm = ( {taskList, setTaskList} ) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // submit後のレンダリングを解除

    if (inputText === "") return;

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText
      }
    ]);

    setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}
