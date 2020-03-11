import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

/**
Redirect is used to replace any new route with the url route specified.
On the other hand the history.push() method only pushes a new entry on the top 
of the history stack. 
In the former case we can not find the orignal url that redirected us but in the 
later the history has the entry of the orignal url and the new address is put on 
the top level.
E.g. using redirect on fb.com will not show the address fb.com in your history.
**/
class Redirection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
		};
	}

	handleChange = event => {
		this.setState({query: [event.target.value]});
	};

	handleClick = event => {
		this.props.history.push(`/food/${this.state.query}`);
	};

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.query}
					placeholder="Type Something"
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>Go using history</button>
				<h1>You are searching for {this.state.query}</h1>
			</div>
		);
	}
}

export default Redirection;
