'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.generateJWT = void 0
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'))
const generateJWT = ({ groups, role, user_id }) => {
	return new Promise((resolve, reject) => {
		var _a
		const payload = { groups, role, user_id }
		const secret = (_a = process.env.SECRETORPRIVATEKEY) !== null && _a !== void 0 ? _a : ''
		jsonwebtoken_1.default.sign(payload, secret, {
			expiresIn: '7d'
		}, (err, token) => {
			if (err) {
				console.log(err)
				reject('Could not generate token')
			}
			else {
				resolve(token)
			}
		})
	})
}
exports.generateJWT = generateJWT
//# sourceMappingURL=generateJWT.js.map