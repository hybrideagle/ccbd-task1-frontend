import DepartmentDetails from './department-details'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav'
let temp_data = [{
    id:1,
    name:"asd",
    manager:"asasd"
  },{
    id:2,
    name:"asd",
    manager:"asasd"
  },{
    id:3,
    name:"asd",
    manager:"asasd"
  }];

let DepartmentCard = () =>
(<MuiThemeProvider>
  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Deparmtents</h1>
    </Paper>
  </div>
</MuiThemeProvider>);

class DepartmentDetailsPage extends Component {
  constructor(props){
    super(props);
    this.state ={data:temp_data};
  }
  componentDidMount() {
    let app = this.props.app;
    const studentService = app.service('students');
    studentService.find().then(page => this.setState({ data: page.data }));
  }

  render() {
    console.log("state",this.state.data);
    return (
    <MuiThemeProvider>
      <div style={{width:"80%",marginLeft:"20%"}}>
          <DepartmentCard />
          <DepartmentDetails data={this.state.data}/>
      </div>
    </MuiThemeProvider>);
  }
}
export default DepartmentDetailsPage;
