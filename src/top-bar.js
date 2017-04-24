import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (props) => {
           return (<div>
              <MuiThemeProvider>
                <AppBar title={"Nexus"}/>
              </MuiThemeProvider>;
            </div>);
    }
