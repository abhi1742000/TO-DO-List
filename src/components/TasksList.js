import React from "react";
import TaskCard from'./TaskCard';

const TasksList = ({ tasks, deleteTaskHandler }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3">
      {tasks.map((task, key) => {
        return (
          <div
            key={key}
            className="col my-2 my-md-3  my-lg-4 d-flex align-items-stretch"
          >
            <TaskCard task={task} deleteTaskHandler={ deleteTaskHandler }/>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
