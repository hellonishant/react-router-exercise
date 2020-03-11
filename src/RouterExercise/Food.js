import React, {Component} from 'react';
import Redirect from 'react-router-dom';

class Food extends Component {
	render() {
		const name = this.props.match.params.name;
		const API_URL = `https://source.unsplash.com/random/?${name}`;
		return (
			<div>
				<h1>I love to eat {name}</h1>
				<img src={API_URL} alt={name} />
			</div>
		);
	}
}

export default Food;
