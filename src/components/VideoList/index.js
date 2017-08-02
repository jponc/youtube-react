import React, { Component } from 'react';
import { connect } from 'react-redux'
import VideoItem from './VideoItem'

class VideoList extends Component {
  render() {
    let videoItems =
      this.props.videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video}/>
      })
    return (<ul>{ videoItems }</ul>)
  }
}

const mapStateToProps = state => ({
  videos: state.youtube.videos
})

export default connect(
  mapStateToProps
)(VideoList)
