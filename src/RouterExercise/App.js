import React, { Component } from "react";
import { Switch, Link, NavLink, Route } from "react-router-dom";
import Food from "./Food";
import "./App.css";

// Route Params are given using the /url/:param form and the route props are needed to
// be passed using through function because that's how render prop works in Route Component
// while the component props only need the name of the component it needs to render.
class App extends Component {
	render() {
		return (
			<div className="App">
				<Route
					exact
					path="/food/:name"
					render={routerProps => <Food {...routerProps} />}
				/>
			</div>
		);
	}
}

export default App;
