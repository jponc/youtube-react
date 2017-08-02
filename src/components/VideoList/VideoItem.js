import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setVideo } from '../../actions/youtube'

class VideoItem extends Component {
  videoClicked() {
    let videoId = this.props.video.id.videoId
    this.props.setVideo(videoId)
  }

  render() {
    let video = this.props.video

    return(
      <li className='list-group-item' onClick={this.videoClicked.bind(this)}>
        <div className='row'>
          <div className='col-xs-4'>
            <img src={video.snippet.thumbnails.default.url} />
          </div>

          <div className='col-xs-8'>
            {video.snippet.title}
          </div>
        </div>
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setVideo
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(VideoItem)
