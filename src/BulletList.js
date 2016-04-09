import React from 'react';
import InputBullet from './InputBullet.js';

/* One bullet, witha list of sub-bullets underneath */
class BulletList extends React.Component {
	constructor() {
		super();
		this.state = {
			// Text for sub-bullets
			bullets: [],
			// Whether or not to display the input bullet
			displayInput: false
		}
	}

	/* Called when a new bullet is submitted */
	onBulletSubmit(text) {
		// Create a new bullet with the submitted text and appropriate ID
		this.state.bullets[this.state.bullets.length] = {
			text: text,
			id: this.props.getNextID()
		};

		// Update the state
		this.setState({bullets: this.state.bullets});
	}

	/* Toggles whether the input bullet is displayed */
	toggleInputDisplay() {
		this.setState({displayInput: !this.state.displayInput});
	}

	/* Returns the InputBullet if it is to be displayed, and nothing otherwise */
	displayInputBullet() {
		if (this.state.displayInput) {
			return <ul><li><InputBullet onSubmit={this.onBulletSubmit.bind(this)} /></li></ul>
		}
	}

	render() {
		return (
			<div>
				<ul>
					{/* Set the text to toggle whether the input bullet is displayed when clicked */}
					<li onClick={this.toggleInputDisplay.bind(this)}>{this.props.text}</li>

					{
						// Map each sub-bullet's text to a BulletList with the text displaed as the first bullet
						this.state.bullets.map((bullet)=> {
							return <BulletList text={bullet.text} key={bullet.id} getNextID={this.props.getNextID} />;
						})
					}

					{/* Display the input bullet if it is to be displayed */}
					<div>{this.displayInputBullet()}</div>
				</ul>
			</div>
		)
	}
}

export default BulletList;