import express,{Application} from 'express'
import cors from 'cors'
import userRoutes from '../routes/user'
import authRoutes from '../routes/auth'
import roleRoutes from '../routes/role'
import groupRoutes from '../routes/group'
import { dbConnection } from '../db/connection'

export class Server {
	private port : string | undefined
	private app : Application
	private path = {
		auth: '/api/auth',
		user: '/api/user',
		role: '/api/role',
		group: '/api/group',
	}

	constructor(){
		this.app = express()
		this.port = process.env.NODE_ENV === 'dev' ? process.env.PORT_DEVELOPMENT : process.env.PORT
		this.connectionDB()
		this.middlewares()
		this.routes()
	}


	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
	}


	async connectionDB() {
		await dbConnection()
	}


	routes() {
		this.app.use(this.path.user, userRoutes)
		this.app.use(this.path.auth,authRoutes)
		this.app.use(this.path.role,roleRoutes)
		this.app.use(this.path.group,groupRoutes)
	}
    
	listen(){
		this.app.listen(this.port, () => {
			console.log(`Server run in ${this.port}`)
		})
	}

}
