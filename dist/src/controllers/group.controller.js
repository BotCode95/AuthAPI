'use strict'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
	return new (P || (P = Promise))(function (resolve, reject) {
		function fulfilled(value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
		function rejected(value) { try { step(generator['throw'](value)) } catch (e) { reject(e) } }
		function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
		step((generator = generator.apply(thisArg, _arguments || [])).next())
	})
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.getGroupByName = exports.getGroups = exports.createGroup = void 0
const group_1 = require('../models/group')
const createGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
	const { nameGroup } = req.body
	try {
		const group = new group_1.Group({ nameGroup })
		yield group.save()
		res.json({
			msg: 'Group Create',
			group,
		})
	}
	catch (error) {
		res.status(400).json({ msg: error })
	}
})
exports.createGroup = createGroup
const getGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
	const groups = yield group_1.Group.find()
	res.json({ groups })
})
exports.getGroups = getGroups
const getGroupByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
	const { name } = req.params
	try {
		const group = yield group_1.Group.find({ nameGroup: name })
		res.json({
			group
		})
	}
	catch (error) {
		res.status(400).json({ msg: error })
	}
})
exports.getGroupByName = getGroupByName
//# sourceMappingURL=group.controller.js.map