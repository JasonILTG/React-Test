import React from 'react';
import { Route, Router, Link, browserHistory, IndexRoute } from 'react-router';

import BulletApp from './BulletApp.js';
import LoginApp from './LoginApp.js';

/* Main app class */
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Navigation</h1>
				<p><Link to="bullet">Bullet App</Link></p>
				<p><Link to="account">Login App</Link></p>
				
				{this.props.children}
			</div>
		)
	}
}

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>Where the heart is</p>
			</div>
		)
	}
}

let routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/bullet" component={BulletApp} />
			<Route path="/account" component={LoginApp} />
		</Route>
	</Router>
);

// Render the app
React.render(routes, document.getElementById('app'));