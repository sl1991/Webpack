import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

require('./app.css');

var App = React.createClass({
	render: function(){
		return (
			<div>
				<header>
					<ul>
						<li><Link to="/App">Dashboard</Link></li>
						<li><Link to="/inbox">Inbox</Link></li>
						<li><Link to="/calendar">Calendar</Link></li>
					</ul>
					Logged in as Jane
				</header>
				{this.props.children}
			</div>
		);
	}
});

var Dashboard = React.createClass({
	render: function(){
		return (
			<div>
				<p>Dashboard</p>
			</div>
		);
	}
});

var Inbox = React.createClass({
	render: function(){
		return (
			<div>
				<p>Inbox</p>
			</div>
		);
	}
});

var Calendar = React.createClass({
	render: function(){
		return (
			<div>
				<p>Calendar</p>
			</div>
		);
	}
});

render(
	<Router history = {browserHistory}>
		<Route path="/" component = {App}>
			<IndexRoute component = {Dashboard}></IndexRoute>
			<Route path = 'app' component = {Dashboard}></Route>
			<Route path = 'inbox' component = {Inbox}></Route>
			<Route path = 'calendar' component = {Calendar}></Route>
			<Route path = '*' component = {Dashboard}></Route>
		</Route>
	</Router>
,document.querySelector('#app'));