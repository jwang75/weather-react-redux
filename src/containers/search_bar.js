import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: ''};

		this.onInputChange = this.onInputChange.bind(this);   // important
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value})
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (  // use form make press enter behavior free
			<form onSubmit={this.onFormSubmit} className="input-group">  
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					calssName="form-control"
					value={this.state.term}
					onChange={this.onInputChange}     // if passing a  callback as a function like this and that 
					                                  // callback has a reference to this, you need to bind with context
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

