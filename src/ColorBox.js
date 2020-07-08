import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props.opacity)
    const newOpacity = (this.props.opacity * 10 - 0.1 * 10 ) / 10
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {(this.props.opacity * 10) / 10 < (0.2 * 10) / 10 ? null : ( 
          <ColorBox opacity={(newOpacity*10)/10} />
      )}
      </div>
    )
  }
}

