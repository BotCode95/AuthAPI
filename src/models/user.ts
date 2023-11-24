import {Schema, Types, model} from 'mongoose'

interface IUser {
    name?: string,
    lastname?: string,
    email: string,
    password: string
    rol: Schema.Types.ObjectId
    groups: Schema.Types.ObjectId[]
    status: boolean
}
const userSchema = new Schema<IUser>({
	name: {type:String, required: false},
	lastname: {type:String, required: false},
	email: {type:String, required: false},
	password: {type:String, required: false},
	rol: {type: Schema.Types.ObjectId,ref: 'Role'},
	groups: [{type: Schema.Types.ObjectId,ref: 'Group'}],
	status: {type: Boolean,default: true},
})

userSchema.methods.toJSON = function() {
	const {__v,password, ...user} = this.toObject()

	return user
}

export const User = model<IUser>('User', userSchema)