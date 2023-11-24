"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = require("../middlewares/validateJWT");
const group_controller_1 = require("../controllers/group.controller");
const router = (0, express_1.Router)();
router.get('/', group_controller_1.getGroups);
router.get('/:name', group_controller_1.getGroupByName);
router.post('/', [validateJWT_1.validateJWT], group_controller_1.createGroup);
exports.default = router;
//# sourceMappingURL=group.js.map