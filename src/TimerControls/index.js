import React from 'react';

class TimerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0
    }
  }
  //const scheduledRender = setTimeout(this.pageRender, 100);
  //clearTimeout(scheduledRender);

  incrementElapsedTime = () => {
    let newElapsedTime = this.state.elapsedTime + 1;
    this.setState({
      elapsedTime: newElapsedTime
    });
  }

  startClicked = () => {
    console.log('Start clicked!');
    const timer = setInterval(this.incrementElapsedTime, 1000);

  }

  pauseClicked = () => {
    console.log('Pause clicked!');
  }

  stopClicked = () => {
    console.log('Stop clicked!');
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
