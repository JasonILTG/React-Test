import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

import BulletApp from './BulletApp.js';

/* Main app class */
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Navigation</h1>
				<a href="#/bullet">Bullet App</a>
			</div>
		)
	}
}

let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/bullet" component={BulletApp} />
	</Router>
);

// Render the app
React.render(routes, document.getElementById('app'));