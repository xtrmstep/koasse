import React, {Component, Fragment} from "react";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AppContext from "../../../appContext";
import Person from './Person';

class PeopleList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {
          ({people}) => {
            return (
              <Fragment>
                <List style={{
                  width: '100%',
                  maxWidth: 360,
                  backgroundColor: 'smokewhite',
                }}>
                  {people.map(person => (
                    <Person key={person.id} {...person} />
                  ))}
                </List>
              </Fragment>
            )
          }}
      </AppContext.Consumer>
    )
  }
}

export default PeopleList;
