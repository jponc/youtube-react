import React, { Component } from 'react';
import { connect } from 'react-redux'

class VideoShow extends Component {
  render() {
    if (this.props.video) {
      return(
        <div>Video #{this.props.video.id} selected!</div>
      )
    } else {
      return(
        <div>No Video Selected</div>
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
