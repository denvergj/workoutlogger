module.exports = {
	init: function(){
		localStorage.clear();
		localStorage.setItem('workouts',JSON.stringify([
			{
				id: 001,
				type: 'Jogging',
				minutes: 20,
				miles: 2,
				date: new Date()
			},
			{
				id: 002,
				type: 'Yoga',
				minutes: 40,
				miles: 0,
				date: new Date()
			}
		]));
	}
}