import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";

class DogDetails extends Component {
	render() {
		let { dog } = this.props;
		return (
			<div className="row justify-content-center">
				<div className="col-lg-6 col-md-6">
					<div className="DogDetails-dog card">
						<img src={dog.src} alt={dog.name} className="card-image-top" />
						<div className="card-body">
							<h1 className="card-title">{dog.name}</h1>
							<h2 className="card-subtitle text-muted">{dog.age} years</h2>
						</div>
						<ul className="list-group list-group-flush">
							{dog.facts.map((facts, i) => (
								<li className="list-group-item" key={i}>
									{facts}
								</li>
							))}
						</ul>
						<div className="card-body">
							<Link to="/dogs" className="btn btn-info">
								Go Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DogDetails;
