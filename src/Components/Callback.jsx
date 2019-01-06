import { Component } from 'react'
// import { withRouter } from 'react-router-dom';

class Callback extends Component {
  componentDidMount() {
    const { onCallback, location, history } = this.props;
    
    onCallback(location, history);
  }

  render() {
    return null;
  }
};

export default Callback;