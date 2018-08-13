import React from 'react';

class Tasks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [{description: 'initial', completed: true}],
      newTaskDescription: ''
    };
  }

  checkboxClicked = (event) => {
    const { tasks } = this.state;
    console.log('Checkbox clicked!:', event.target.id);
    console.log('desc:', tasks[event.target.id].description);

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
      <div style={{marginLeft: '20px', marginTop: '20px', height: '250px'}}>
        <div>Tasks:</div>
        <div style={{marginLeft: '40px', width: '50%', float: 'left'}}>Description:</div><div style={{width: '40%', float: 'left'}}>Complete:</div>

        {
          tasks.map( (task, i) =>
              <div key={i}>
                <div style={{marginLeft: '40px', width: '50%', float: 'left'}}>{task.description}</div>
                <div style={{width: '40%', float: 'left'}}><input id={i} type="checkbox" onClick={this.checkboxClicked}/></div>
              </div>
          )
        }

        <div style={{marginLeft: '40px', width: '50%', float: 'left'}}><input type="text" value={newTaskDescription} onChange={this.newTaskTextChanged}/></div>
        <div style={{width: '40%', float: 'left'}}><input type="button" value="Add Task" onClick={this.addTaskButtonClicked}/></div>
      </div>

    );
  }
}

export default Tasks;
/*
            {
              tasks.map( (task, i) =>
               <tr key={i}>
                 <td>{task.description}</td>
                 <td><input id={i} type="checkbox" onClick={this.checkboxClicked}/></td>
               </tr>
              )
            }
              <td><input type="text" value={this.state.newTaskDescription} onChange={this.newTaskTextChanged}/></td>
              <td><input type="button" value="Add" onClick={this.addTaskButtonClicked}/></td>

 */

