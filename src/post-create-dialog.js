import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


//expects a function to submit the post details, as a prop with name `submit`

export default class PostCreateDialog extends React.Component{

  constructor(props){
    super(props);
    this.state = {text:"blarghe"};
  }

  handleSubmit = (event) => {
      console.log("handling submit:",this.state.text);
      this.props.submit(this.state.text);
  }

  handleChange = (e) => this.setState({text:e.target.value})

  render(){
    let actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />
    ];

    return (
      <Dialog
        title="Create Post"
        actions={actions}
        modal={true}
        open={this.props.open}
      >
        <form>
          <label>
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
          </label>
        </form>
      </Dialog>
    );
  }
}
