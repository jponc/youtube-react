import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchVideos } from '../../actions/youtube'

import VideoList from '../VideoList'
import VideoShow from '../VideoShow'

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <VideoShow />
        </div>

        <div className="col-md-4">
          <VideoList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  queryChanged: (ownProps.query !== state.youtube.query),
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
