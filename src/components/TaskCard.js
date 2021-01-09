import React from 'react';

const TaskCard = ({ task, deleteTaskHandler }) => {
    return(
        <div className="card col p-0">
              <div className="card-body">
                <h3>{task.name}</h3>
                <p>{task.priority}</p>
              </div>
              <div className="card-footer p-0">
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => deleteTaskHandler(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
    );
}

export default TaskCard;