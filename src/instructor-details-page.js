import InstructorDetails from './student-details'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav'
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

let InstructorCard = () =>
(<MuiThemeProvider>
  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Instructors</h1>
    </Paper>
  </div>
</MuiThemeProvider>);

class InstructorDetailsPage extends Component {
  constructor(props){
    super(props);
    this.state ={data:temp_data};
  }
  componentDidMount() {
    console.log("Fetch data");
    let app = this.props.app;
    const instructorService = app.service('instructors');
    instructorService.find().then(page => {
        console.log("page",page);
        this.setState({ data: page });
      }
    );
  }

  render() {
    console.log("state",this.state.data);
    return (
    <MuiThemeProvider>
      <div style={{width:"80%",marginLeft:"20%"}}>
          <InstructorCard />
          <InstructorDetails data={this.state.data}/>
      </div>
    </MuiThemeProvider>);
  }
}
export default InstructorDetailsPage;
