import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeQuery, searchVideos } from '../../actions/youtube'

import './index.css'

class SearchBar extends Component {
  handleKeyPress(event) {
    this.props.changeQuery(event.target.value)

    if (event.key === "Enter") {
      event.preventDefault()
      this.handleSubmit()
    }
  }

  handleSubmit() {
    this.props.searchVideos(this.props.query)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="navbar-form" role="search" id="search-box">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="query"
            id="search-query"
            onKeyPress={this.handleKeyPress.bind(this)}
            defaultValue={this.props.query}
          />
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search" /></button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  query: state.youtube.query
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeQuery,
  searchVideos
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
