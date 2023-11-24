"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = require("../middlewares/validateJWT");
const role_controller_1 = require("../controllers/role.controller");
const router = (0, express_1.Router)();
router.get('/', role_controller_1.getRols);
router.get('/:id', role_controller_1.getRoleById);
router.post('/', [validateJWT_1.validateJWT], role_controller_1.createRole);
exports.default = router;
//# sourceMappingURL=role.js.map