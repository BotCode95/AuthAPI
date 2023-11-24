import { NextFunction, Request,Response } from 'express'
import jwt from 'jsonwebtoken'
import {User} from '../models/user'

export const validateJWT = async (req:Request,res:Response,next:NextFunction)=> {
	const token = req.header('x-token')

	if(!token) {
		return res.json({
			message: 'The request is missing a token.'
		})
	}

	try {
		const secret:string = process.env.SECRETORPRIVATEKEY ?? ''
		const {user_id, role, groups}:  any = jwt.verify(token,secret)
		const user = await User.findById(user_id)

		if(!user) {
			return res.status(401).json({
				message: 'the user not exits in DB'
			})
		}

		if(!user.status) {
			return res.status(401).json({
				message: 'User deactivated'
			})
		}

		
		(<any>req).user = user
		next()
        
	} catch (error) {
		res.status(401).json({
			message: 'Token is not valid'
		})
	}
}

