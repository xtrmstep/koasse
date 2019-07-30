import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PeopleList from "./js/components/PeopleList/PeopleList";
import MessageBoard from "./js/components/MessageBoard/MessageBoard";
import SendMessage from "./js/components/SendMessage/SendMessage";
import AppContext from "./appContext";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // some initial state to draw
    this.state = {
      people: [
        {avatar: "https://randomuser.me/api/portraits/men/32.jpg", name: "Name1", id: 1},
        {avatar: "https://randomuser.me/api/portraits/women/68.jpg", name: "Name2", id: 2},
        {avatar: "https://randomuser.me/api/portraits/men/46.jpg", name: "Name3", id: 3}
      ],
      messages: [
        {id: 1, personId: 1, text: "Hi", time: "2014-01-01T23:28:56.782Z"},
        {id: 2, personId: 2, text: "Holla!", time: "2014-01-01T23:29:56.782Z"},
        {id: 3, personId: 1, text: "How're you doing?", time: "2014-01-01T23:30:56.782Z"},
        {id: 4, personId: 3, text: "Fine!", time: "2014-01-01T23:35:56.782Z"},
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <AppContext.Provider value={this.state}>
          <Grid container spacing={2}>
            <Grid item>
              <PeopleList/>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <MessageBoard/>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <SendMessage/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
