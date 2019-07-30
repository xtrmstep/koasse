import React, {Component} from 'react';
import AppContext from "../../../appContext";
import Message from './Message';

class MessageBoard extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {
          (state) => state.messages.map(message =>
            <Message key={message.id} avatar={state.people.find(({ id }) => id === message.personId).avatar} {...message}/>
          )
        }
      </AppContext.Consumer>
    );
  }
}

export default MessageBoard;
