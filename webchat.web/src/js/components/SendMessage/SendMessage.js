import React, {Component, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import axios from 'axios';

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputIndex: '',
      inputMessage: ''
    }
  }

  // TODO With async method it gives an error in console: regeneratorRuntime is not defined
  sendMessage = () => {
    try {
      axios.post('http://localhost:3000/messages', {
        userIndex: this.state.inputIndex,
        message: this.state.inputMessage
      });
    } catch (error) {
      console.log(error);
    }
  }

  inputMessageChanged = (event) => {
    this.setState({inputMessage: event.target.value});
  }

  inputIndexChanged = (event) => {
    this.setState({inputIndex: event.target.value});
  }

  render() {
    return (
      <Fragment>
        <Box>
          <TextField
            id="user-index"
            label="Index"
            value={this.state.index}
            onChange={this.inputIndexChanged}
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
