import React, { Component } from 'react';

class VideoPlayer extends Component {
  render() {
    return(
      <div className='row'>
        <div className='col-md-12'>
          <div id='video-player-iframe-container' dangerouslySetInnerHTML={{__html: this.props.video.player.embedHtml}}></div>
        </div>
      </div>
    )
  }
}

export default VideoPlayer
