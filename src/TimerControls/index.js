import React from 'react';

class TimerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      timer: null
    }
  }
  //const scheduledRender = setTimeout(this.pageRender, 100);
  //clearTimeout(scheduledRender);

  incrementElapsedTime = () => {
    let newElapsedTime = this.state.elapsedTime + 1;
    const timer = setTimeout(this.incrementElapsedTime, 1000);
    this.setState({
      elapsedTime: newElapsedTime,
      timer
    });

  }

  startClicked = () => {
    console.log('Start clicked!');
    const timer = setTimeout(this.incrementElapsedTime, 1000);
    // this.setState({
    //   timer
    // });
  }

  pauseClicked = () => {
    console.log('Pause clicked!');
    clearTimeout(this.state.timer);
  }

  stopClicked = () => {
    console.log('Stop clicked!');
    this.setState({
//      timer: null,
      elapsedTime: 0
    });
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
