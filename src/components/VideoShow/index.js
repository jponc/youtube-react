import React, { Component } from 'react';
import { connect } from 'react-redux'

import VideoPlayer from './VideoPlayer'
import VideoDescription from './VideoDescription'


class VideoShow extends Component {
  render() {
    let video = this.props.video

    if (video) {
      let playerKey = `player-${video.id}`
      let descriptionKey = `description-${video.description}`

      return(
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>{video.snippet.title}</h1>
            </div>
          </div>
          <VideoPlayer key={playerKey} video={video} />
          <VideoDescription key={descriptionKey} video={video} />
        </div>
      )
    } else {
      return(
        <div>Search a video!</div>
      )
    }
  }
}

const mapStateToProps = state => ({
  video: state.youtube.video
})

export default connect(
  mapStateToProps
)(VideoShow)
