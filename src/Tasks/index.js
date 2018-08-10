import React from 'react';

class Tasks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskText: ''
    };
  }

  checkboxClicked = (taskId) => {
    console.log('Checkbox clicked!:', taskId);

  }

  newTaskTextChanged = (event) => {
    this.setState({
      newTaskText: event.target.value
    });
  }

  addButtonClicked = () => {
    const newTaskText = this.state.newTaskText;
    const newTask = {text: newTaskText, completed: false}
    const newTasks = this.state.tasks.push(newTask);
    this.setState({
      tasks: newTasks
    });
    console.log('after adding', ...this.state.tasks)
  }

  render() {
    console.log('in render()', this.state.tasks[0])
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
            <tr>
              <td>Do task #1</td><td><input type="checkbox" onClick={() => this.checkboxClicked(1)}/></td>
            </tr>
            <tr>
              <td>Do task #2</td><th><input type="checkbox"/></th>
            </tr>
            </tbody>
          </table>

          <table>
            <tbody>
            <tr>
              <td><input type="text" value={this.state.newTaskText} onChange={this.newTaskTextChanged}/></td>
              <td><input type="button" value="Add" onClick={this.addButtonClicked}/></td>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default Tasks;
