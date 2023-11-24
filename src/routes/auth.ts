import {Router} from 'express'
import {check} from 'express-validator'
import {login, validateTokenUser} from '../controllers/auth.controller'
import {validateJWT} from'../middlewares/validateJWT'

const router = Router()

router.get('/',[
	validateJWT
], validateTokenUser )
router.post('/login', [
	check('email', 'the email address is required').isEmail(),
	check('password', 'the password is required').not().isEmpty(),
], login)



export default router