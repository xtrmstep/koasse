import React, {Component, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class SendMessage extends Component {
  constructor() {
    super();
    this.state = {
      inputMessage: '',
      inputName: '',
      inputAvatar: ''
    }
  }

  inputMessageChanged = (event) => {
    this.setState({inputMessage: event.target.value});
  };

  sendMessage = () => {
    alert(this.state.inputMessage);
  };

  inputNameChanged = (event) => {
    this.setState({inputName: event.target.value});
  }

  inputAvatarChanged = (event) => {
    this.setState({inputAvatar: event.target.value});
  }

  render() {
    return (
      <Fragment>
        <Box>
          <TextField
            id="user-name"
            label="Name"
            value={this.state.name}
            onChange={this.inputNameChanged}
            margin="normal"
          />
        </Box>
        <Box>
          <TextField
            id="user-avatar"
            label="Avatar URL"
            value={this.state.avatar}
            onChange={this.inputAvatarChanged}
            margin="normal"
          />
        </Box>
        <Box>
          <TextField
            id="user-message"
            label="Message"
            style={{margin: 8}}
            placeholder="Enter your message here"
            multiline
            rows="4"
            margin="normal"
            value={this.state.inputMessage}
            variant="filled"
            onChange={this.inputMessageChanged}
          />
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>
        </Box>
      </Fragment>
    );
  }
}

export default SendMessage;
