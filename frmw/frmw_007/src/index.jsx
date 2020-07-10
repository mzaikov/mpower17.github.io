import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { DatePicker } from 'material-ui';
import moment from 'moment';
import Counter from './Counter';

class App extends React.Component {

  constructor() {
    super();
    this.state = { days: 0 };
  }

  render() {
    const { days } = this.state;

    return (
      <div>
        <Counter stars={days} />
        <DatePicker
          onChange={(event, date) => this.setState({ days: moment(date).dates() })}
          floatingLabelText="Выберите дату!"
        />
      </div>
    );
  }
}

render(
  <MuiThemeProvider><App /></MuiThemeProvider>,
  document.querySelector('.cont'),
);
