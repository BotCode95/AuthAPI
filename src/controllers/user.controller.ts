import { Request, Response } from 'express'
import { User } from '../models/user'
import bcryptjs from 'bcryptjs'
import { generateJWT } from '../utils/generateJWT'
import { getGroupByNames, getRolByName } from '../helpers/searchValues'



export const createUser = async(req:Request, res:Response) => {
	const {name, lastname, email, password, rol, groups} = req.body
	try {
		const groupsIds = await getGroupByNames(groups)
		const rolId = await getRolByName(rol)
		const user = new User({name,lastname,email,password, rol:rolId, groups:groupsIds})
		const salt = bcryptjs.genSaltSync()
		user.password = bcryptjs.hashSync(password, salt)

		await user.save()

		const token =  await generateJWT({user_id:user.id, role:rol, groups})

		res.json({
			msg: 'User Create',
			user,
			token
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}


export const getUsers = async(req:Request, res:Response) => {
	const users = await User.find()
	res.json({users})
}
export const getUserById = async(req:Request, res:Response) => {
	const {id} = req.params
	try {
		const user = await User.findById(id)

		res.json({
			user
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}
export const updateUser = async(req:Request, res:Response) => {
	const {id} = req.params
	const {_id, ...rest} = req.body

	const {groups, rol} = rest;
	try {
		const groupsIds = await getGroupByNames(groups)
	const rolId = await getRolByName(rol)
		const user = await User.findByIdAndUpdate(id, {groups: groupsIds, rol: rolId, ...rest}, { new: true })
		res.json({user})
	} catch (error) {
		res.status(400).json({ msg: error})
	}
}
export const deleteUser = async(req:Request, res:Response) => {
	const {id} = req.params
	try {
		await User.findByIdAndUpdate(id, {status: false}, {new: true})
		res.json({message: 'User deleted successfully'})
	} catch (error) {
        
		res.status(400).json({ msg: error})
	}
}