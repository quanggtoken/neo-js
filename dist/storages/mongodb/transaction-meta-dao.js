"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas");
class TransactionMetaDao {
    constructor(mongoose, collectionName) {
        this.model = this.getModel(mongoose, collectionName);
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.countDocuments({}).exec();
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model(data).save();
        });
    }
    getModel(mongoose, collectionName) {
        const schema = schemas_1.transactionMetaSchema;
        return mongoose.models[collectionName] || mongoose.model(collectionName, schema);
    }
}
exports.TransactionMetaDao = TransactionMetaDao;
//# sourceMappingURL=transaction-meta-dao.js.map