import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
	render() {
		let navLinks = this.props.dog.map((dog, i) => (
			<li className="nav-item" key={i}>
				<NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>
					{dog.name}
				</NavLink>
			</li>
		));
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link className="navbar-brand" to="/dogs">
					DogApp
				</Link>
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#mainNavbar"
					aria-controls="mainNavbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="mainNavbar">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<NavLink exact className="nav-link" to="/dogs">
								Home <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						{navLinks}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
