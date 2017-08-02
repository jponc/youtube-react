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
    return(
      <li onClick={this.videoClicked.bind(this)}>
        {this.props.video.id.videoId}
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
