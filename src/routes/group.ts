import {Router} from 'express'
import {validateJWT} from'../middlewares/validateJWT'
import { createGroup, getGroupByName, getGroups } from '../controllers/group.controller'

const router = Router()

router.get('/', getGroups)
router.get('/:name', getGroupByName)
router.post('/',[validateJWT],createGroup)

export default router