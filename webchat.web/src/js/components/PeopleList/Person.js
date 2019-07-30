import React, {Component, Fragment} from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

class Person extends Component {
  render() {
    return (
      <ListItem key={this.props.id} role={undefined} dense button>
        <ListItemAvatar>
          <Avatar src={this.props.avatar}/>
        </ListItemAvatar>
        <ListItemText primary={this.props.name}/>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="Send PM">
            <CommentIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default Person;
