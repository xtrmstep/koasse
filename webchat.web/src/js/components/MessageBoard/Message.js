import React, {Component} from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class Message extends Component {
  render() {
    return (

      <ListItem>
        <ListItemAvatar>
          <Avatar src={this.props.avatar}/>
        </ListItemAvatar>
        <ListItemText primary={this.props.text} secondary={this.props.time}/>
      </ListItem>
    );
  }
}

export default Message;
