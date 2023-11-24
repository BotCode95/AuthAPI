"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupByNames = exports.getRolByName = void 0;
const group_1 = require("../models/group");
const role_1 = require("../models/role");
const getRolByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const rol = yield role_1.Role.findOne({ rol: name });
    if (!rol)
        return null;
    return rol._id;
});
exports.getRolByName = getRolByName;
const getGroupByNames = (groupNames) => __awaiter(void 0, void 0, void 0, function* () {
    const groupsIds = [];
    for (const nameGroup of groupNames) {
        const group = yield group_1.Group.findOne({ nameGroup });
        if (!group)
            return `el grupo ${nameGroup} no existe`;
        groupsIds.push(group === null || group === void 0 ? void 0 : group._id);
    }
    return groupsIds;
});
exports.getGroupByNames = getGroupByNames;
//# sourceMappingURL=searchValues.js.map