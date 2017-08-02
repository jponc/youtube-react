import React, { Component } from 'react';

class VideoPlayer extends Component {
  render() {
    return(
      <div className='row'>
        <div className='col-md-12'>
          <p dangerouslySetInnerHTML={{__html: this.props.video.player.embedHtml}}></p>
        </div>
      </div>
    )
  }
}

export default VideoPlayer
