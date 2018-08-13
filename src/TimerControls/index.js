import React from 'react';

class TimerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      timer: null
    }
    this.stopClicked = this.stopClicked.bind(this);
  }

  startClicked = () => {
    console.log('Start clicked!');
//    const timer = setTimeout(this.incrementElapsedTime, 1000);
    // this.setState({
    //   timer
    // });
//    this.scheduleNextTimeout();
    this.incrementElapsedTime();
  }

  pauseClicked = () => {
    console.log('Pause clicked!');
    const { timer } = this.state;
    clearTimeout(timer)
    this.setState({
      timer: null
    });
  }

  stopClicked = () => {
    console.log('Stop clicked!');
    const { timer } = this.state;
    clearTimeout(timer);

    const { stopTimer } = this.props;
    if(!stopTimer) {
      this.setState({
        timer: null,
        elapsedTime: 0
      });
    } else {
      alert("Pomodoro timer has expired.")
    }
  }

  // scheduleNextTimeout = () => {
  //   const timer = setTimeout(this.incrementElapsedTime, 1000);
  //   this.setState({ timer });
  //   console.log('in sNT, just setstate')
  // }

  incrementElapsedTime = (props) => {
    const { updateProgress } = this.props;
//    const elapsedTime = this.state.elapsedTime + 1;
    const timer = setTimeout(this.incrementElapsedTime, 1000);
//    this.setState({ elapsedTime, timer });
    this.setState({ timer });
    updateProgress();
//    this.scheduleNextTimeout();
  }

  render( props ) {
    const { stopTimer } = this.props;
    if(stopTimer) {
      this.stopClicked();
    }
    return (
      <div style={{marginLeft: '20px', marginTop: '20px'}}>
        <div>Timer Controls:</div>
        <span style={{marginLeft: '50px'}}><input type="button" value="start" onClick={this.startClicked}></input></span>
        <span style={{marginLeft: '50px'}}><input type="button" value="pause" onClick={this.incrementElapsedTime}></input></span>
        <span style={{marginLeft: '50px'}}><input type="button" value="stop" onClick={this.stopClicked}></input></span>
      </div>
    );
  }

}

export default TimerControls;
