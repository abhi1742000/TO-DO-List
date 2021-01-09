import React, { Component } from "react";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

class App extends Component {
  state = { tasks: [] };

  addNewTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] })
  };

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id)}) 
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-3">Todo List</h1>
        <AddTask addTaskHandler={this.addNewTask} />
        <TasksList
          deleteTaskHandler={this.deleteTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
