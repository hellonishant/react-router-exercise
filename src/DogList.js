import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
	render() {
		return (
			<div>
				<h1 className="display-1 text-center mb-4">Dogs</h1>
				<div className="row">
					{this.props.dog.map(dog => (
						<div className="Dog col-lg-4 col-md-4 text-center" key={dog.name}>
							<Link to={`/dogs/${dog.name}`}>
								<img src={dog.src} alt={dog.name} />
								<h3 className="underline">{dog.name}</h3>
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default DogList;
