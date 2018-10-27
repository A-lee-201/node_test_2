// This is where the database connectoins happen
const users = {
	getUserData: function (userName) {
		// read from data base
		const user = {
			name: 'Muhanndad',
			age: '17'
		}
		return user;
	},
	getTimeSheet: function (userId) {
		let data;
		// read timesheet of userId in database and put it into 'data'
		return data;
	}
}

module.exports = users;
