import React from 'react';
import ReactDOM from 'react-dom';
import Pomodoro from './index';

it('Tasks renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pomodoro/>, div);
  ReactDOM.unmountComponentAtNode(div);
});



