import React from 'react';
import ReactDOM from 'react-dom';
import TimerControls from './index';

it('Tasks renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimerControls/>, div);
  ReactDOM.unmountComponentAtNode(div);
});



