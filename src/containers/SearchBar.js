import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

  }

  //All dom event handler are provided by vanllia javascript
  //Not react


  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Get a five-day forecast in your city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-seconday">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchTopProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null skip changes to state
export default connect(null, mapDispatchTopProps)(SearchBar);
