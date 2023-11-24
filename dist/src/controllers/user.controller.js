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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateJWT_1 = require("../utils/generateJWT");
const searchValues_1 = require("../helpers/searchValues");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastname, email, password, rol, groups } = req.body;
    try {
        const groupsIds = yield (0, searchValues_1.getGroupByNames)(groups);
        const rolId = yield (0, searchValues_1.getRolByName)(rol);
        const user = new user_1.User({ name, lastname, email, password, rol: rolId, groups: groupsIds });
        const salt = bcryptjs_1.default.genSaltSync();
        user.password = bcryptjs_1.default.hashSync(password, salt);
        yield user.save();
        const token = yield (0, generateJWT_1.generateJWT)({ user_id: user.id, role: rol, groups });
        res.json({
            msg: 'User Create',
            user,
            token
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User.find();
    res.json({ users });
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.User.findById(id);
        res.json({
            user
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id } = _a, rest = __rest(_a, ["_id"]);
    const { groups, rol } = rest;
    try {
        const groupsIds = yield (0, searchValues_1.getGroupByNames)(groups);
        const rolId = yield (0, searchValues_1.getRolByName)(rol);
        const user = yield user_1.User.findByIdAndUpdate(id, Object.assign({ groups: groupsIds, rol: rolId }, rest), { new: true });
        res.json({ user });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield user_1.User.findByIdAndUpdate(id, { status: false }, { new: true });
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map