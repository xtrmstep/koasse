import React, {Component} from 'react';
import AppContext from "../../../appContext";
import Message from './Message';

class MessageBoard extends Component {
  constructor(props) {
    super(props);

    this.onMessageReceived = this.onMessageReceived.bind(this);

    if (typeof EventSource !== "undefined") {

      let source = new EventSource('http://localhost:3001/messages/sse');
      source.addEventListener('message', this.onMessageReceived, false);

      source.addEventListener('open', (e) => {
        console.log('opened');
      }, false);

      source.addEventListener('error', (e) => {
        if (e.readyState == EventSource.CLOSED) {
          console.log('closed');
        }
      }, false);
    }
  }

  onMessageReceived = (event) => {
    console.log(event.data);
    let msg = JSON.parse(event.data); // TODO need to receive JSON
    this.props.addMessage(msg);
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          (state) => state.messages.map(message =>
            <Message key={message.id}
                     avatar={state.people.find(({id}) => id === message.personId).avatar} {...message}/>
          )
        }
      </AppContext.Consumer>
    );
  }
}

export default MessageBoard;
