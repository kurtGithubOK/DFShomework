import React, { Component } from 'react';
import styled from 'styled-components';
import TimerControls from '../TimerControls';
import PomodoroStatus from '../ProgressTracker';
import Tasks from '../Tasks';

const PomodoroWrapper = styled.div`
  background-color: lightgray;
  text-align: left;
  height: 500px;
`;

const PomodoroBody = styled.div`
  margin-left: 50px;
  width: 500px;
  height: 500px;
`;

class Pomodoro extends Component {
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
      {label: 'Break #4', duration: (30 * 60 )},
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
        <PomodoroWrapper>
          <div>Pomodoro Timer</div>
          <PomodoroBody>
            <TimerControls updateProgress={this.updateProgress} stopTimer={stopTimer} />
            <PomodoroStatus segmentLabel={segmentLabel} segmentTimeRemaining={segmentTimeRemaining}/>
            <Tasks/>
          </PomodoroBody>
        </PomodoroWrapper>
    );
  }
}

export default Pomodoro;

