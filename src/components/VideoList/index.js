import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux'
import VideoItem from './VideoItem'

class VideoList extends Component {
  render() {
    let videos = this.props.videos
    let videoItems = videos.map(video => {
      return <VideoItem key={video.id.videoId} video={video}/>
    })
    let title = videos.length == 0 ? '' : 'Results'

    return (
      <div id='result-list-container' className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='title'>{title}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list-group'>{ videoItems }</ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  videos: state.youtube.videos
})

export default connect(
  mapStateToProps
)(VideoList)
