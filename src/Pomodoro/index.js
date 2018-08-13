import React, { Component } from 'react';
import TimerControls from '../TimerControls';
import PomodoroStatus from '../ProgressTracker';
import Tasks from '../Tasks';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    const segmentList = [   // move to compWillMount()?????
      {label: 'Round #1', duration: (10)},  // * 60
      {label: 'Break #1', duration: (5)},
      {label: 'Round #2', duration: (10)},
      {label: 'Break #2', duration: (5 )},
      {label: 'Round #3', duration: (10)},
      {label: 'Break #3', duration: (5 )},
      {label: 'Round #4', duration: (10)},
      {label: 'Break #4', duration: (3 )},
    ];
    this.state = {
      segmentList,
      segmentIndex: 0,
      segmentTimeRemaining: segmentList[0].duration,
      segmentLabel: segmentList[0].label,
      stopTimer: false
    }
    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress = () => {
    const { segmentList, segmentIndex, segmentTimeRemaining } = this.state;
    if(segmentTimeRemaining - 1 > 0) {
      this.setState({ segmentTimeRemaining: segmentTimeRemaining - 1 });
    } else {
      const newSegmentIndex = segmentIndex + 1;
      if(newSegmentIndex === segmentList.length) {
        this.setState( {stopTimer: true });
      } else {
        this.setState({
          segmentIndex: newSegmentIndex,
          segmentTimeRemaining: segmentList[newSegmentIndex].duration,
          segmentLabel: segmentList[newSegmentIndex].label
        });
      }
    }
  }

  render() {
    const { segmentLabel, segmentTimeRemaining, stopTimer } = this.state;
    return (
        <div style={{backgroundColor: 'lightgray', textAlign: 'left', height: '500px'}}>
          <div>Pomodoro Timer</div>
          <div style={{marginLeft: '50px', width: '500px', height: '500px'}}>
            <TimerControls updateProgress={this.updateProgress} stopTimer={stopTimer} />
            <PomodoroStatus segmentLabel={segmentLabel} segmentTimeRemaining={segmentTimeRemaining}/>
            <Tasks/>
          </div>
        </div>
    );
  }
}

export default Pomodoro;

