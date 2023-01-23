import React from 'react';
import ReactDOM from 'react-dom';

import ComboBox from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <ComboBox title={title} />,
  document.getElementById('app')
);

module.hot.accept();
