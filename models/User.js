const { Schema, model, Types } = require('mongoose');
const { Thought } = require('./Thought');

const FriendSchema = new Schema(
    {
        friendID: {
            //May need to update type
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }
    }
);

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        //Add reference to thought model
        thoughts: {

        },
        friends: [FriendSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;