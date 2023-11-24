import { Request, Response } from 'express'
import { Group } from '../models/group'


export const createGroup = async(req:Request, res:Response) => {
	const {nameGroup} = req.body

	try {
		const group = new Group({nameGroup})

		await group.save()

		res.json({
			msg: 'Group Create',
			group,
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}


export const getGroups = async(req:Request, res:Response) => {
	const groups = await Group.find()
	res.json({groups})
}
export const getGroupByName = async(req:Request, res:Response) => {
	const {name} = req.params
	try {
		const group = await Group.find({nameGroup: name})

		res.json({
			group
		})
	} catch (error) {
		res.status(400).json({msg: error})
	}
}