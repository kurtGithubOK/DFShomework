import React from 'react';

class Tasks extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  checkboxClicked = () => {
    console.log('Checkbox clicked!');

  }

  render() {
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
              <td>Do task #1</td><td><input type="checkbox" onClick={this.checkboxClicked}/></td>
            </tr>
            <tr>
              <td>Do task #2</td><th><input type="checkbox"/></th>
            </tr>
            </tbody>
          </table>
          <table>
            <tbody>
            <tr>
              <th><input type="text"/></th><th><input type="button" value="Add"/></th>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default Tasks;
