import React, { Component } from 'react';

class VideoDescription extends Component {
  render() {
    return(
      <div className='row'>
        <div className='col-md-12'>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    )
  }
}

export default VideoDescription
