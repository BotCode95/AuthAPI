'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const express_validator_1 = require('express-validator')
const auth_controller_1 = require('../controllers/auth.controller')
const validateJWT_1 = require('../middlewares/validateJWT')
const router = (0, express_1.Router)()
router.get('/', [
	validateJWT_1.validateJWT
], auth_controller_1.validateTokenUser)
router.post('/login', [
	(0, express_validator_1.check)('email', 'the email address is required').isEmail(),
	(0, express_validator_1.check)('password', 'the password is required').not().isEmpty(),
], auth_controller_1.login)
exports.default = router
//# sourceMappingURL=auth.js.map