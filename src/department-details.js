import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DockedDrawer from './docked-drawer';
import {Link} from 'react-router-dom';

let Student = (props) => {
  return (<Card>
            <DockedDrawer />
            <CardText style={{textAlign:"center"}}>
              <div style={{display:"inline-block"}}>
                <div>Name:{props.data.name}</div>
                <div>Manager:{props.data.age}</div>
              </div>
              <div style={{width:"10%",display:"inline-block"}} />
              <div style={{display:"inline-block"}}>
                <Link to={"/student-classes/"+props.data.id}>
                  <RaisedButton label={"Show sections"} primary={true} style={{bgColor:"black"}}/>
                </Link>
              </div>
            </CardText>
        </Card>);
};


export default (props) =>{
    console.log(props.data);
    let cards = props.data.map(a => <Student data={a} key={a.id}/> );
    return (
      <div>
        {cards}
      </div>
    );
  }
