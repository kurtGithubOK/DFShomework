import React from 'react';
import styled from 'styled-components';

const ProgressTrackerWrapper = styled.div`
  margin-left: 20px; 
  margin-top: 20px; 
  height: 50px;
`;

const Segment = styled.div`
  margin-left: 40px;
  width: 50%;
  float: left;
`;

const TimeRemaining = styled.div`
  width: 40%;
  float: left;
`;

class ProgressTracker extends React.Component {

  convertSecondsToMinutesSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }

  render(props) {
    const {segmentLabel, segmentTimeRemaining} = this.props;
    return (
      <ProgressTrackerWrapper>
        <div>Progress:</div>
        <Segment>Segment: {segmentLabel}</Segment>
        <TimeRemaining>Time Remaining: {this.convertSecondsToMinutesSeconds(segmentTimeRemaining)}</TimeRemaining>
      </ProgressTrackerWrapper>
    );
  }
}

export default ProgressTracker;

