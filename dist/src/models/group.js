'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Group = void 0
const mongoose_1 = require('mongoose')
const GroupSchema = new mongoose_1.Schema({
	nameGroup: {
		type: String,
		required: [true, 'group is required']
	}
})
exports.Group = (0, mongoose_1.model)('Group', GroupSchema)
//# sourceMappingURL=group.js.map