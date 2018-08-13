import React from 'react';
import styled from 'styled-components';

const TimerControlsWrapper = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

const ButtonWrapper = styled.span`
  margin-left: 50px;
`;

class TimerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      timer: null
    }
    this.stopClicked = this.stopClicked.bind(this);
  }

  stopClicked = () => {
    const { timer } = this.state;
    clearTimeout(timer);

    const { stopTimer } = this.props;
    if(!stopTimer) {
      this.setState({
        timer: null,
        elapsedTime: 0
      });
    } else {
      alert("Pomodoro timer has ended.")
    }
  }

  startClicked = (props) => {
    const { updateProgress } = this.props;
    const timer = setTimeout(this.startClicked, 1000);
    this.setState({ timer });
    updateProgress();
  }

  render( props ) {
    const { stopTimer } = this.props;
    const { timer } = this.state;
    if(stopTimer) {
      this.stopClicked();
    }
    return (
      <TimerControlsWrapper>
        <div>Timer Controls:</div>
        <ButtonWrapper><input type="button" value="start" disabled={timer} onClick={this.startClicked}></input></ButtonWrapper>
        <ButtonWrapper><input type="button" value="stop" disabled={!timer} onClick={this.stopClicked}></input></ButtonWrapper>
      </TimerControlsWrapper>
    );
  }

}

export default TimerControls;
