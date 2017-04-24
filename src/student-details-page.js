/** This component renders the details of all th students, using the StudentDetails component.
*/
import StudentDetails from './student-details'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav';
import StudentCreateDialog from './student-create-dialog';
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

let StudentCard = () =>
(<MuiThemeProvider>
  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Students</h1>
    </Paper>
  </div>
</MuiThemeProvider>);

class StudentDetailsPage extends Component {
  constructor(props){
    super(props);
    let app = this.props.app;
    this.studentService = app.service('students');
    this.state ={data:temp_data,dialog_open:false};
  }
  componentDidMount() {
    let app = this.props.app;
    this.studentService = app.service('students');
    console.log(this.studentService);
    this.studentService.find().then(
      page => {
        console.log("page",page);
        this.setState({ data: page });
      }
    )
  }

  submit = (usn) => {
    let vals = {
      "usn":usn,
      "name":"student_name_7",
      "adv_id":"in_04",
      "doa":"16/07/2015",
      "dob":"08/07/1997",
      "gender":"F",
      "dep_id":"cs",
      "sec_id":"cs-c"
    }
    this.studentService.create(vals);
    this.setState({dialog_open:false});
  }

  remove = (usn) => () =>  {console.log("delete:",usn);this.studentService.remove(usn)};

  render() {
    console.log("data:",this.state.data);
    let openDialog = () => this.setState({dialog_open:true});
    return (
    <MuiThemeProvider>
      <div style={{width:"80%",marginLeft:"20%"}}>
        <div>
          <StudentCard />
          <FloatingActionButton
            style={{float:"right/",position:"fixed",bottom:"1em",right:"1em"}}
            onTouchTap={openDialog}
          />
          <StudentDetails data={this.state.data} remove={this.remove}/>
        </div>
        <StudentCreateDialog
        open={this.state.dialog_open}
        handleClose={()=>this.setState({dialog_open:false})}
        handleOpen={()=>this.setState({dialog_open:true})}
        submit={this.submit}
        />
      </div>
    </MuiThemeProvider>);
  }
}
export default StudentDetailsPage;
