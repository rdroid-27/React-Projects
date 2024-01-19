/* eslint-disable react/prop-types */
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
function AddTodo({ onNewItem }) {
  const [toDoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setToDoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddBtnClicked = () => {
    onNewItem(toDoName, dueDate);
    setDueDate("");
    setToDoName("");
  };

  return (
    <div className="container">
      <div className="row rg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={toDoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success rg-button"
            onClick={handleAddBtnClicked}
          >
            <MdAssignmentAdd /> ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
