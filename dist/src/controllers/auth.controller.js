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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenUser = exports.login = void 0;
const generateJWT_1 = require("../utils/generateJWT");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = require("../models/user");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'Email / Passsword is not correct'
            });
        }
        if (!user.status) {
            return res.status(400).json({
                msg: 'The user is in a deactivated state'
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'the password is incorrect'
            });
        }
        const token = yield (0, generateJWT_1.generateJWT)({ user_id: user.id, role: user.rol, groups: user.groups });
        res.json({
            user,
            token
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.login = login;
const validateTokenUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, generateJWT_1.generateJWT)(req.user._id);
    res.json({
        user: req.user,
        token: token,
    });
});
exports.validateTokenUser = validateTokenUser;
//# sourceMappingURL=auth.controller.js.map