import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';

import "../../vendor/bootstrap5.min.css";
import "../../vendor/selectize.min.css";
import "../../vendor/selectize.bootstrap4.min.css";
import "../../vendor/lodash.min.js";
import "../../vendor/selectize.min.js";

render(<Popup />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
