import React, {Component} from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter,Route, Redirect} from 'react-router-dom';
import PostsPage from './posts-page';
import FriendsPage from './friends-page';
import UsersPage from './users-page'
import feathers,{rest,hooks} from 'feathers-client';
import HomePage from './home-page';
import TopBar from './top-bar';
import LeftNav from './left-nav';

//import rest from 'feathers-rest';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import superagent from 'superagent';
import auth from 'feathers-authentication-client'

import conn_string from './config'

// Needed for onTouchTap
injectTapEventPlugin();


class App extends Component {
  constructor(props){
    super(props);
    this.app = feathers()
      .configure(rest(conn_string)
      .superagent(superagent))
      .configure(hooks())
      .configure(auth({storage:window.localStorage}));
      console.log("app");

  }
  render() {
    let SelfPostsPageWrapper = (props) => <PostsPage app={this.app} id={this.app.get("user")} />;
    let PostsPageWrapper = (props) => <PostsPage app={this.app} id={props.params.match.id}/>;
    let FriendsPageWrapper = (props) => <FriendsPage app={this.app}/>;
    let UsersPageWrapper = (props) => <UsersPage app={this.app} name={props.match.params.name}/>;

    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div id="container">
            <div style={{width:"80%",marginLeft:"20%"}}>
              <TopBar/>
            </div>
            <LeftNav open={true}/>
            <div style={{width:"70%",marginLeft:"20%"}}>
              <Route exact path="/posts" component={SelfPostsPageWrapper}/>
              <Route path="/posts/:id" component={PostsPageWrapper}/>
              <Route path="/friends" component={FriendsPageWrapper}/>
              <Route path="/users/:name" component={UsersPageWrapper}/>
              <Route exact path="/" component={HomePage}/>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
