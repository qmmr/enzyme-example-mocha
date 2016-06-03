import React, { PropTypes } from 'react';

const propTypes = {};
const defaultProps = { modal: false };

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text: '' }
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ text: evt.target.value });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.refs.modal);
  }

  render() {
    return (
      <div className="bar">
        <input type="text" ref="modal" value={ this.state.text } onChange={ this.handleChange } />
      </div>
    );
  }
}

Bar.propTypes = propTypes;
Bar.defaultProps = defaultProps;

export default Bar;
