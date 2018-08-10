import React from 'react';

const PomodoroStatus = (props) => (
    <div>
      <div>Pomodoro Status:</div>
      <table>
        <thead>
          <tr>
            <th>Status:</th><th>Time Remaining:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Round 1</td><td>12:34</td>
          </tr>
        </tbody>
      </table>
    </div>
);

export default PomodoroStatus;
