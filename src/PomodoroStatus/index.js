import React from 'react';

class PomodoroStatus extends React.Component {

  constructor(props) {
    super(props);
    const segmentList = [   // move to compWillMount()?????
      {label: 'Round #1', duration: (15)},  // * 60
      {label: 'Break #1', duration: (5)},
      {label: 'Round #2', duration: (15)},
      {label: 'Break #2', duration: (5 )},
      {label: 'Round #3', duration: (15)},
      {label: 'Break #3', duration: (5 )},
      {label: 'Round #4', duration: (15)},
      {label: 'Break #4', duration: (3 )},
    ];
    this.state = {
      segmentIndex: 0,
      segmentList,
      segmentTimeRemaining: segmentList[0].duration
    }
    setInterval(this.updateProgress, 1000)
  }




  updateProgress = () => {
    const { segmentTimeRemaining, segmentIndex, segmentList } = this.state;
    if(segmentTimeRemaining - 1 > 0) {
      this.setState({ segmentTimeRemaining: segmentTimeRemaining - 1 });
    } else {
      const newSegmentIndex = segmentIndex + 1;
      if(newSegmentIndex === segmentList.length) {
        console.log('call strop somehow');
      } else {
        this.setState({
          segmentIndex: newSegmentIndex,
          segmentTimeRemaining: segmentList[newSegmentIndex].duration
        });
      }
    }
  }


  convertSecondsToMinutesSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }

  render() {
    console.log('index', this.state.segmentIndex, 'segmentTimeRemaining', this.state.segmentTimeRemaining)
    const {segmentList, segmentIndex, segmentTimeRemaining} = this.state;
    const currentSegment = segmentList[segmentIndex];
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
            <td>{currentSegment.label}</td><td>{this.convertSecondsToMinutesSeconds(segmentTimeRemaining)}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

}


export default PomodoroStatus;
