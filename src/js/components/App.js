var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = require('./AddForm');
var Workouts = require('./Workouts');

function getAppState(){
	return {
		showForm: AppStore.getShowForm(),
		workouts: AppStore.getWorkouts()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	onShowFormClick: function(e){
		e.preventDefault();
		AppActions.showForm();
		
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		console.log(this.state.workouts);
		if(this.state.showForm) {
			var form = <AddForm />
		} else {
			var form = '';
		}
		return(
			<div>
				<h1 className="text-center page-header">Workout Logger</h1>
				<a href="#" className="btn btn-primary btn-block" onClick={this.onShowFormClick}>Add Workout</a>
				<br />
				{form}
				<br />
				<Workouts workouts={this.state.workouts}/>
				<br />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;