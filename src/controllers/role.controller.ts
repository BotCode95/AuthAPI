import { Request, Response } from 'express'
import { Role } from '../models/role'


export const createRole = async(req:Request, res:Response) => {
	const { rol: rolForCreated} = req.body

	try {
		const rol = new Role({rol:rolForCreated})
		await rol.save()

		res.json({
			msg: 'Role Create',
			rol,
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}


export const getRols = async(req:Request, res:Response) => {
	const rols = await Role.find()
	res.json({rols})
}
export const getRoleById = async(req:Request, res:Response) => {
	const {id} = req.params
	try {
		const rol = await Role.findById(id)

		res.json({
			rol
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}
