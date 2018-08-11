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
    const { tasks } = this.state;
    return (
        <div>
          <div>Tasks:</div>
          <table>
            <thead>
            <tr>
              <th>Description</th><th>Complete?</th>
            </tr>
            </thead>
            <tbody>
            {
              tasks.map( (task, i) =>
               <tr key={i}>
                 <td>{task.description}</td>
                 <td><input id={i} type="checkbox" onClick={this.checkboxClicked}/></td>
               </tr>
              )
            }
            </tbody>
          </table>

          <table>
            <tbody>
            <tr>
              <td><input type="text" value={this.state.newTaskDescription} onChange={this.newTaskTextChanged}/></td>
              <td><input type="button" value="Add" onClick={this.addTaskButtonClicked}/></td>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default Tasks;
