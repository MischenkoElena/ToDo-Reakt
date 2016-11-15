import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

// css styles
require("./styles/styles.scss");

render(<App />, document.getElementById("app"));
