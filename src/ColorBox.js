import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    
    
    const newOpacity = this.props.opacity - 0.1
    if (this.props.opacity >= 0.2) {
      return (
      <div style={{opacity: this.props.opacity}}> 
        <ColorBox opacity = {newOpacity}/> 
      </div>)
    }  else 
    return null

    
        
    
        
      
      
  }

}


