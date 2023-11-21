import {Schema, model} from 'mongoose'
interface IGroup {
    nameGroup: string
}
const GroupSchema = new Schema<IGroup>({
	nameGroup: {
		type: String,
		required: [true, 'group is required']
	}
})

export const Group = model<IGroup>('Group', GroupSchema)