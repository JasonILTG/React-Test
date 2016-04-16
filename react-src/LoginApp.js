import React from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class LoginApp extends React.Component {
	constructor() {
		super();

		// Text is initially blank
		this.state = {
			user: '',
			password: '',
			loginText: ''
		};
	}

	/* Called when the username is changed to update the state */
	updateUserText(event) {
		this.setState({user: event.target.value});
	}

	/* Called when the password is changed to update the state */
	updatePasswordText(event) {
		this.setState({password: event.target.value});
	}

	/* Called when the bullet is submitted */
	submitLogin(event) {
		// Prevents the default action of refreshing the page
		event.preventDefault();
		
		fetch('http://localhost:4242/account/verify', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: this.state.user,
				password: this.state.password
			})
		})
			.then((response) => {
				if (response.status == 200) {
					return response.json();
				}
		})
			.then((json) => {
				if (json.valid) {
					this.setState({loginText: 'Success!'});
				} else {
					this.setState({loginText: 'Failed :('});
				}
		});

		this.setState({user: ''});
		this.setState({password: ''});
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<h3>{this.state.loginText}</h3>

				{/* Form with a text box and a submit button, with the submit action bound to submitBullet */}
				<form className="loginForm" onSubmit={this.submitLogin.bind(this)}>
					<p><input type="text" placeholder="Username" value={this.state.user} onChange={this.updateUserText.bind(this)}/></p>
					<p><input type="text" placeholder="Password" value={this.state.password} onChange={this.updatePasswordText.bind(this)}/></p>
					<p><input type="submit" value="Submit" /></p>
				</form>
			</div>
		)
	}
}

export default LoginApp;