// Include React
var React = require('react');

// Here we include all of the sub-components
var saved = require('./Children/saved');
var search = require('./Children/search');

// Helper Function
var helpers = require('./utils/helpers.js');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'