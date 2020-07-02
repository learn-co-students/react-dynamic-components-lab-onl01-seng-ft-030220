import React, { Component } from 'react';

export default class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
        opacity: 0.0
      }
  }



  render() {
    const newOpacity = this.props.opacity - 0.1;
    return this.props.opacity < 0.2 ? null : (<div style={{opacity: this.props.opacity}}><ColorBox opacity={newOpacity}/></div>)
  }

}
