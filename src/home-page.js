import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav'

export default (props) => {return <Redirect to='/students'/>};
