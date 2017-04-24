import TimeTable from './time-table'
import React, { Component } from 'react';
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

let InstructorCard = (props) =>
(  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Time table:{props.id}</h1>
    </Paper>
  </div>
);

class InstructorTimeTable extends Component {
  constructor(props){
    super(props);
    this.state ={data:temp_data};
  }
  componentDidMount() {
    let app = this.props.app;
    console.log("id",this.props.id);
    const instructorService = app.service('instructor_classes');
    instructorService.get(this.props.id).then(page => this.setState({ data: page.data }));
  }

  render() {
    return (
    <MuiThemeProvider>
      <div style={{width:"80%",marginLeft:"20%"}}>
        <div>
          <InstructorCard id={this.props.id}/>
          <TimeTable data={this.state.data}/>
        </div>
      </div>
    </MuiThemeProvider>);
  }
}
export default InstructorTimeTable;
