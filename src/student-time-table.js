import TimeTable from './time-table'
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav'
let temp_data = [
  {
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

let TimeCard = (props) =>
(  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Time table for student:{props.id}</h1>
    </Paper>
  </div>
);

class StudentTimeTable extends Component {
  constructor(props){
    super(props);
    this.state ={data:temp_data};
  }
  componentDidMount() {
    let app = this.props.app;
    console.log("id",this.props.id);
    const timeTableService = app.service('student_classes');
    timeTableService.get(this.props.id).then(page => this.setState({ data: page }));
  }

  render() {
    return (
    <MuiThemeProvider>
      <div>
        <div>
          <TimeCard id={this.props.id}/>
          <TimeTable data={this.state.data} id={this.props.id}/>
        </div>
      </div>
    </MuiThemeProvider>);
  }
}
export default StudentTimeTable;
