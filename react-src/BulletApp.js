import React from 'react';

import BulletContainer from './BulletContainer.js';

/* Main app class */
class BulletApp extends React.Component {
	constructor() {
		super();

		// Set initial nextID to 1
		this.state = {
			nextID: 1
		}
	}

	/* Returns the next unused ID (for component keys) */
	getNextID() {
		let toReturn = this.state.nextID;
		this.setState({nextID: this.state.nextID + 1});
		return toReturn;
	}

	render() {
		return (
			<div>
				<h1>Bullet Points</h1>

				{/* BulletContainer to contain all bullets */}
				<BulletContainer getNextID={this.getNextID.bind(this)} />
			</div>
		)
	}
}

export default BulletApp;