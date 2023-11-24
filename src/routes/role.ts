import {Router} from 'express'
import {validateJWT} from'../middlewares/validateJWT'
import { createRole, getRoleById, getRols } from '../controllers/role.controller'

const router = Router()

router.get('/', getRols)
router.get('/:id',getRoleById)
router.post('/',[validateJWT],createRole)

export default router