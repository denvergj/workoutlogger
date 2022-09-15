var AppActions = require('../actions/AppActions');

module.exports = {
	saveWorkout: function(workout) {
		console.log('saving workout', workout);
		
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		
		console.log('later ', workouts);
		workouts.push(workout);
		
		localStorage.setItem('workouts', JSON.stringify(workouts));
	},
	getWorkouts: function() {
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		AppActions.receiveWorkouts(workouts); 
	},
	removeWorkout: function(workoutId) {
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		
		for(var i = 0; i < workouts.length; i++){
			if(workouts[i].id == workoutId){
				workouts.splice(i, 1);
			}
		} 
		
		localStorage.setItem('workouts', JSON.stringify(workouts));
	}
}