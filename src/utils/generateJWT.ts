import jwt from 'jsonwebtoken'
import { JWTToken } from '../types'

export const generateJWT = ( {groups, role, user_id} :JWTToken) => {

	return new Promise( (resolve, reject) => {

		const payload = { groups, role, user_id }
		const secret:string = process.env.SECRETORPRIVATEKEY ?? ''
		jwt.sign( payload, secret, {
			expiresIn: '7d'
		}, ( err, token ) => {
			if ( err ) {
				console.log(err)
				reject( 'Could not generate token' )
			} else {
				resolve( token )
			}
		})

	})
}


