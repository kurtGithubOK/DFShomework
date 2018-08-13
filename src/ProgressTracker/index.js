import React from 'react';

class ProgressTracker extends React.Component {

//   constructor(props) {
//     super(props);
//     const segmentList = [   // move to compWillMount()?????
//       {label: 'Round #1', duration: (15)},  // * 60
//       {label: 'Break #1', duration: (5)},
//       {label: 'Round #2', duration: (15)},
//       {label: 'Break #2', duration: (5 )},
//       {label: 'Round #3', duration: (15)},
//       {label: 'Break #3', duration: (5 )},
//       {label: 'Round #4', duration: (15)},
//       {label: 'Break #4', duration: (3 )},
//     ];
//     this.state = {
//       segmentList,
//       segmentIndex: 0,
//       segmentTimeRemaining: segmentList[0].duration
//     }
// //    setInterval(this.updateProgress, 1000)
//   }
//
//   updateProgress = () => {
//     const { segmentList, segmentIndex, segmentTimeRemaining } = this.state;
//     if(segmentTimeRemaining - 1 > 0) {
//       this.setState({ segmentTimeRemaining: segmentTimeRemaining - 1 });
//     } else {
//       const newSegmentIndex = segmentIndex + 1;
//       if(newSegmentIndex === segmentList.length) {
//         console.log('call strop somehow');
//       } else {
//         this.setState({
//           segmentIndex: newSegmentIndex,
//           segmentTimeRemaining: segmentList[newSegmentIndex].duration
//         });
//       }
//     }
//   }


  convertSecondsToMinutesSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }

  render(props) {
    const {segmentLabel, segmentTimeRemaining} = this.props;
    return (
      <div style={{marginLeft: '20px', marginTop: '20px', height: '50px'}}>
        <div>Progress:</div>
        <div style={{marginLeft: '40px', width: '50%', float: 'left'}}>Phase: {segmentLabel}</div>
        <div style={{width: '40%', float: 'left'}}>Time Remaining: {this.convertSecondsToMinutesSeconds(segmentTimeRemaining)}</div>
      </div>
    );
  }
}

export default ProgressTracker;

