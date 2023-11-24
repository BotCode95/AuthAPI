import { Group } from '../models/group'
import { Role } from '../models/role'

export const getRolByName = async (name: string) => {
	const rol = await Role.findOne({rol:name})
	if(!rol) return null
	return rol._id
}
export const getGroupByNames = async (groupNames: string[]) => { 
	const groupsIds = []
	for(const nameGroup of groupNames){
		const group = await Group.findOne({nameGroup})
        if(!group) return `el grupo ${nameGroup} no existe`
		groupsIds.push(group?._id)
	}
	return groupsIds
}
