import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

class Routes extends Component {
	render() {
		const dogDetails = routerProps => {
			let name = routerProps.match.params.name;
			let currentDog = this.props.dogs.find(
				dog => dog.name.toLowerCase() === name.toLowerCase()
			);
			return <DogDetails {...routerProps} dog={currentDog} />;
		};
		return (
			<Switch>
				<Route
					exact
					path="/dogs"
					render={() => <DogList dog={this.props.dogs} />}
				/>
				<Route exact path="/dogs/:name" render={dogDetails} />
				<Redirect to="/dogs" />
			</Switch>
		);
	}
}

export default Routes;
