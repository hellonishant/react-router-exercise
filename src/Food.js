import React, { Component } from "react";

class Food extends Component {
	render() {
		const API_URL = `https://source.unsplash.com/random/?${this.props.match.params.name}`;
		return (
			<div>
				<h1>I love to eat {this.props.match.params.name}</h1>
				<img src={API_URL} alt={this.props.match.params.name} />
			</div>
		);
	}
}

export default Food;
