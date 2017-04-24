import React from 'react'
import './App.css'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router-dom'

let User = (props) => {
  return (<Card>
            <CardHeader/>
            <CardText style={{textAlign:'center'}}>
              <div style={{display:"inline-block"}}>
                <div>Name:{props.data.name}</div>
              </div>
              <div style={{width:"10%",display:"inline-block"}} />
              <div style={{display:"inline-block"}}>
              <CardActions>
                <FlatButton label={"Add Friend"} secondary={true} style={{bgColor:"black"}} onTouchTap={() => props.addFriend(props.data.usn)}/>
                </CardActions>
              </div>
            </CardText>
        </Card>);
};


//takes data as an array of objects as a prop, produces cards for each

export default (props) => {
    console.log(props.data);
    let cards = props.data.map(a => <User data={a} key={a.id}/> );
    return (
      <div>
        {cards}
      </div>
    );
  }
