//your code here
import React, {Component} from 'react';

export default class Comment extends Component {
  state = {
    commentText: ''
  }

  render() {
    return (
      <div className="comment">{this.props.commentText}</div>
    )
  }
};
