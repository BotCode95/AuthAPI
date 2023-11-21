import {Schema, model} from 'mongoose'

interface IUser {
    name?: string,
    lastname?: string,
    email: string,
    password: string
    rol: string,
    groups: Array<string>,
    status: boolean
}

const userSchema = new Schema<IUser>({
	name: {type:String, required: false},
	lastname: {type:String, required: false},
	email: {type:String, required: false},
	password: {type:String, required: false},
	rol: {type: String,default: 'USER_ROLE',enum: ['ADMIN_ROLE','USER_ROLE', 'EMPLOYEE_ROLE', 'RECLUTER_ROLE']},
	status: {type: Boolean,default: true},
})


userSchema.methods.toJSON = function() {
	const {__v,password, ...user} = this.toObject()

	return user
}

export const User = model<IUser>('User', userSchema)