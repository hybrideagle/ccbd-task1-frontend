/** This component renders the details of all the students, using the StudentDetails component.
*/
import Users from './users'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav';

let temp_data = [{
    id:1,
    name:"asd",
    age:"asasd"
  },{
    id:2,
    name:"asd",
    age:"asasd"
  },{
    id:3,
    name:"asd",
    age:"asasd"
  }];

let UsersCard = () =>
(<div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Students</h1>
    </Paper>
  </div>
);

//expects a name for as the param `name`, defaults to no filtering if undefined.
class FriendsPage extends Component {
  constructor(props){
    super(props);
    let app = this.props.app;
    this.usersService = app.service('/users');
    this.state = {data:temp_data};
  }
  componentDidMount() {
    let app = this.props.app;
    this.usersService = app.service('/users');
    console.log(this.usersService);
    this.usersService.find().then(
      () => {
        let friends = this.friends;
        let query = {
          _id:{
            $in: friends
          }
        };
        this.userService.find(query).then(
          data => {
            console.log("data",data);
            this.setState({ data: data });
          }
        )
      }
    )
  }

  render() {
    return (
      <div style={{width:"80%",marginLeft:"20%"}}>
          <UsersCard />
          <Users data={this.state.data}/>
      </div>
    );
  }
}
export default FriendsPage;
