import React from 'react';

/* Input bullet to submit a new bullet point */
class InputBullet extends React.Component {
	constructor() {
		super();

		// Text is initially blabk
		this.state = {
			text: ''
		};
	}

	/* Called when the text is changed to update the state */
	updateText(event) {
		this.setState({text: event.target.value});
	}

	/* Called when the bullet is submitted */
	submitBullet(event) {
		// Prevents the default action of refreshing the page
		event.preventDefault();
		
		// Call the onSubmit method provided by the parent BulletList and reset the
		this.props.onSubmit(this.state.text);
		this.setState({text: ''});
	}

	render() {
		return (
			/* Form with a text box and a submit button, with the submit action bound to submitBullet */
			<form className="bulletForm" onSubmit={this.submitBullet.bind(this)}>
				<input type="text" placeholder="Type here" value={this.state.text} onChange={this.updateText.bind(this)}/>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default InputBullet;