import { Router } from 'express'
import { check } from 'express-validator'
import { isRoleValidate } from '../utils/validators'
import {validateJWT} from '../middlewares/validateJWT'
import {createUser, getUsers, getUserById, updateUser, deleteUser} from '../controllers/user.controller'

const router = Router()
router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', [
	check('name', 'the name is required').not().isEmpty(),
	check('lastname', 'the lastname is required').not().isEmpty(),
	check('password', 'the password length is below the 6 characters').isLength({min: 6}),
	check('email', 'the email address is not valid').isEmail(),
	check('rol').custom(isRoleValidate),
], createUser)
router.put('/:id', [validateJWT, 
	check('rol').custom(isRoleValidate),
],updateUser)
router.delete('/:id', [
	validateJWT,
],deleteUser)

export default router