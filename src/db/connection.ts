import mongoose from 'mongoose'

export const dbConnection = async() => {
	const mongoConnection : string  = process.env.MONGODB_CNN ?? ''
	try {
		mongoose.connect(mongoConnection)
		console.log('DB is connected')
	} catch (error) {
		console.error(error)
	}
}
