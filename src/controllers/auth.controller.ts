/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request,Response } from 'express'
import { generateJWT } from '../utils/generateJWT'
import bcryptjs from 'bcryptjs'
import { User } from '../models/user'

export const login = async (req:Request, res: Response) => {
	const {email, password} =req.body

	try {

		const user = await User.findOne({email})
		if(!user){
			return res.status(400).json({
				msg: 'Email / Passsword is not correct'
			})
		}

		if(!user.status){
			return res.status(400).json({
				msg: 'The user is in a deactivated state'
			})
		}
		const validPassword = bcryptjs.compareSync(password, user.password)
		if(!validPassword){
			return res.status(400).json({
				msg: 'the password is incorrect'
			})
		}
		
		const token = await generateJWT({user_id:user.id, role:user.rol, groups: user.groups})

		res.json({
			user, 
			token
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			msg: 'Hable con el administrador'
		})
	}
}

export const validateTokenUser = async (req:Request, res:Response ) => {
	const token = await generateJWT( (<any>req).user._id )
    
	res.json({
		user: (<any>req).user,
		token: token,
	})

}