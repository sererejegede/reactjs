import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Companies from './views/companies';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui/dist/semantic.min.css';

ReactDOM.render(<Companies />, document.getElementById('root'));
registerServiceWorker();
