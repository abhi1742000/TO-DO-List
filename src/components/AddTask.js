import React, { useState } from "react";
import Swal from 'sweetalert2'

const AddItem = ({ addTaskHandler }) => {
  const [formData, setFormData] = useState({ name: "", priority: "moderate" });

  const { name, priority } = formData;

  const handleNameChange = (event) => {
    const name = event.target.value || "";

    setFormData({
      ...formData,
      name,
    });
  };

  const handlePriorityChange = (event) => {
    setFormData({
      ...formData,
      priority: event.target.value,
    });
  };

  const submitButton = (event) => {
    event.preventDefault();
    const { name, priority } = formData;

    if (!name || !priority) {
      Swal.fire({
        icon: 'error',
        text: 'Please enter task name and select a priority'
      })

      return;
    }

    addTaskHandler({ ...formData, id: Date.now()})
    setFormData({ name: "", priority: "moderate" });
  };

  return (
    <form className="form">
      <div className="form-row align-items-center">
        <div className="form-group col-12 col-md-6">
          <label>Task:</label>
          <input
            className="form-control form-control-sm"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Task Name"
          />
        </div>

        <div className="form-group col-12 col-md-6">
          <label>Choose a priority:</label>
          <select
            className="form-control form-control-sm"
            onChange={handlePriorityChange}
            value={priority}
          >
            <option value="">Choose Option</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button
        className="btn btn-sm btn-primary d-block mx-auto"
        onClick={submitButton}
      >
        Submit
      </button>
    </form>
  );
};

export default AddItem;
