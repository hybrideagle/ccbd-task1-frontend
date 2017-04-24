import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
export default (props) => {
    return (
      <div>
        <Drawer open={props.open} width={+(props.width)}>
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/posts"><MenuItem>Posts</MenuItem></Link>
          <Link to="/friends"><MenuItem>Friends</MenuItem></Link>
          <Link to="/users"><MenuItem>Users</MenuItem></Link>
          <Link to="/login"><MenuItem>Login</MenuItem></Link>
        </Drawer>
      </div>
    );
}
