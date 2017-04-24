/** This component renders the posts from a single person, and takes id as a prop.
    It uses the Posts component.
*/
import Posts from './posts'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

let PostsCard = () =>
(<div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Posts</h1>
    </Paper>
  </div>
);

//expects a name for as the param `name`, defaults to no filtering if undefined.
class PostsPage extends Component {
  constructor(props){
    super(props);
    let app = this.props.app;
    this.postsService = app.service('/posts');
    this.state = {data:temp_data,dialog_open:false};

    this.openDialog = () => this.setState({dialog_open:true});

    this.addPost = (d) => this.postsService.create(d).then((d)=>console.log("created:",d));
  }
  componentDidMount() {
    let app = this.props.app;
    this.postsService = app.service('/posts');
    console.log(this.postsService);
    this.postsService.find({_id:this.props.id}).then(
      data => {
        console.log("data",data);
        this.setState({ data: data });
      }
    )
  }

  render() {
    return (
      <div style={{width:"80%",marginLeft:"20%"}}>
          <PostsCard />
          <Posts data={this.state.data} addPost={this.addPost}/>
          <FloatingActionButton
            style={{float:"right/",position:"fixed",bottom:"1em",right:"1em"}}
            onTouchTap={this.openDialog}
          />
      </div>
    );
  }
}

export default PostsPage;
