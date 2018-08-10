import React from 'react';

class PomodoroStatus extends React.Component {

  constructor(props) {
    super(props);
    const segmentList = [   // move to compWillMount()?????
      {label: 'Round #1', duration: (25 * 60)},
      {label: 'Break #1', duration: (5 * 60)},
      {label: 'Round #2', duration: (25 * 60)},
      {label: 'Break #2', duration: (5 * 60)},
      {label: 'Round #3', duration: (25 * 60)},
      {label: 'Break #3', duration: (5 * 60)},
      {label: 'Round #4', duration: (25 * 60)},
      {label: 'Break #4', duration: (15 * 60)},
    ];
    this.state = {
      currentSegmentIndex: 3,
      segmentList
    }
  }

  convertSecondsToMinutesSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }

  render() {
    const {segmentList, currentSegmentIndex} = this.state;
    const currentSegment = segmentList[currentSegmentIndex];
    return (
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
            <td>{currentSegment.label}</td><td>{this.convertSecondsToMinutesSeconds(currentSegment.duration)}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

}


export default PomodoroStatus;
