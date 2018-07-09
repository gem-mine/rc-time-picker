/* eslint no-console:0 */

import '@sdp.nd/rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';
import TimePicker from '@sdp.nd/rc-time-picker';

class App extends React.Component {
  state = {
    open: false,
  };
  setOpen = ({ open }) => {
    this.setState({ open });
  }
  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleOpen}>Toggle open</button>
        <TimePicker
          open={this.state.open}
          onOpen={this.setOpen}
          onClose={this.setOpen}
          focusOnOpen
        />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('__react-content')
);
