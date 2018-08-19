import React from 'react';
import ReactDOM from 'react-dom';


import Hello from './App';

import registerServiceWorker from './registerServiceWorker';




//takes the virutal DOM node created by extends Component & adds it to the actual DOM. 2 arguments: component, DOM element we want to append it to.
ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
