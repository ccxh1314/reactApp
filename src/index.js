import React from 'react';
import ReactDOM from 'react-dom';
// import './lib/font.js';
import './lib/flexible.js';
import App from './pages/App.js';

// import './utils/axios';

import {BrowserRouter,Route} from 'react-router-dom'


ReactDOM.render( 
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>
  ,
    document.getElementById('root')
); 
