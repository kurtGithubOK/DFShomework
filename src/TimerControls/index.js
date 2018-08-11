import React from 'react';

class TimerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      timer: null
    }
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
    clearTimeout(timer)
    this.setState({
      timer: null,
      elapsedTime: 0
    });
  }

  // scheduleNextTimeout = () => {
  //   const timer = setTimeout(this.incrementElapsedTime, 1000);
  //   this.setState({ timer });
  //   console.log('in sNT, just setstate')
  // }

  incrementElapsedTime = () => {
    const elapsedTime = this.state.elapsedTime + 1;
    const timer = setTimeout(this.incrementElapsedTime, 1000);
    this.setState({ elapsedTime, timer });
//    this.scheduleNextTimeout();
  }

  render() {
    console.log('elapsedTime:', this.state.elapsedTime)
    return (
      <div>
        <div>Timer Controls:</div>
        <span><input type="button" value="start" onClick={this.startClicked}></input></span>
        <span><input type="button" value="pause" onClick={this.incrementElapsedTime}></input></span>
        <span><input type="button" value="stop" onClick={this.stopClicked}></input></span>
      </div>
    );
  }

}

export default TimerControls;
