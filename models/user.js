const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	userName: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	created:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
	}],
	favorites:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
	}],
	comments:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
	}],
	following:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "User"
	}],
	followers:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "User"
	}],
}, {
	timestamps: true
})

module.exports = mongoose.model('User', UserSchema)