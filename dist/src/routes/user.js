"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validators_1 = require("../utils/validators");
const validateJWT_1 = require("../middlewares/validateJWT");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/', user_controller_1.getUsers);
router.get('/:id', user_controller_1.getUserById);
router.post('/', [
    (0, express_validator_1.check)('name', 'the name is required').not().isEmpty(),
    (0, express_validator_1.check)('lastname', 'the lastname is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'the password length is below the 6 characters').isLength({ min: 6 }),
    (0, express_validator_1.check)('email', 'the email address is not valid').isEmail(),
    (0, express_validator_1.check)('rol').custom(validators_1.isRoleValidate),
], user_controller_1.createUser);
router.put('/:id', [validateJWT_1.validateJWT,
    (0, express_validator_1.check)('rol').custom(validators_1.isRoleValidate),
], user_controller_1.updateUser);
router.delete('/:id', [
    validateJWT_1.validateJWT,
], user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map