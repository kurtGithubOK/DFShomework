import React from 'react';
import styled from 'styled-components';

const TasksWrapper = styled.div`
  margin-left: 20px; 
  margin-top: 20px; 
  height: 250px;
`;

const TaskDescriptionHeader = styled.div`
  margin-left: 40px; 
  width: 50%;
  float: left;
`;

const TaskCompletionHeader = styled.div`
  width: 40%;
  float: left;
`;

const TaskDescriptionField = styled.div`
  margin-left: 40px; 
  width: 50%; 
  float: left;
`;

const TaskCompletionIndicator = styled.div`
  width: 40%; 
  float: left;
`;

const TaskEntryField = styled.div`
  margin-left: 40px; 
  width: 50%; 
  float: left;
`;

const AddTaskButton = styled.div`
  width: 40%; 
  float: left;
`;

class Tasks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskDescription: ''
    };
  }

  checkboxClicked = (event) => {
    const { tasks } = this.state;
    console.log('Checkbox clicked for id:', event.target.id, 'task description is:', tasks[event.target.id].description);
  }

  newTaskTextChanged = (event) => {
    this.setState({
      newTaskDescription: event.target.value
    });
  }

  addTaskButtonClicked = () => {
    const { newTaskDescription, tasks } = this.state;
    const newTask = {description: newTaskDescription, completed: false}
    const newTasks = tasks.concat(newTask);
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    const { tasks, newTaskDescription } = this.state;
    return (
      <TasksWrapper>
        <div>Tasks:</div>
        <TaskDescriptionHeader>Description:</TaskDescriptionHeader><TaskCompletionHeader>Complete:</TaskCompletionHeader>

        {
          tasks.map( (task, i) =>
              <div key={i}>
                <TaskDescriptionField>{task.description}</TaskDescriptionField>
                <TaskCompletionIndicator><input id={i} type="checkbox" onClick={this.checkboxClicked}/></TaskCompletionIndicator>
              </div>
          )
        }

        <TaskEntryField><input type="text" placeholder="Enter task here" value={newTaskDescription} onChange={this.newTaskTextChanged}/></TaskEntryField>
        <AddTaskButton><input type="button" value="Add Task" onClick={this.addTaskButtonClicked}/></AddTaskButton>
      </TasksWrapper>
    );
  }
}

export default Tasks;

