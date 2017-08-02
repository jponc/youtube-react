import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchVideos } from '../../actions/youtube'

import VideosList from '../VideosList'
import VideosLoading from '../VideosLoading'

class Home extends Component {
  componentDidMount() {
    this.props.searchVideos(this.props.query)
  }

  render() {
    if (this.props.isLoaded) {
      return <VideosList />
    } else {
      return <VideosLoading />
    }
  }
}

const mapStateToProps = state => ({
  query: state.youtube.query,
  isLoaded: state.youtube.isLoaded
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchVideos
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
