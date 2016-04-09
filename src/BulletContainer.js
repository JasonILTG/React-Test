import React from 'react';
import BulletList from './BulletList.js';
import InputBullet from './InputBullet.js';

/* Container for all bullets */
class BulletContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			bullets: []
		}
	}

	/* Submits the text in the submit box as a bullet */
	onBulletSubmit(text) {
		// Add a new bullet with the text and appropriate ID
		this.state.bullets[this.state.bullets.length] = {
			text: text,
			id: this.props.getNextID()
		};

		// Update the state
		this.setState({bullets: this.state.bullets});
	}

	render() {
		return (
			<div>
				{
					// Map each bullet text to a BulletList with the text displayed as the first bullet point
					this.state.bullets.map((bullet)=> {
						return <BulletList text={bullet.text} key={bullet.id} getNextID={this.props.getNextID} />;
					})
				}

				<ul>
					{/* InputBullet to submit new bullets */}
					<li><InputBullet onSubmit={this.onBulletSubmit.bind(this)} /></li>
				</ul>
			</div>
		)
	}
}

export default BulletContainer;