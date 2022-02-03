"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async register({ request, response }) {
        const data = request.only(['email', 'password']);
        const user = await User_1.default.create(data);
        return response.created(user);
    }
    async login({ request, response, auth }) {
        const data = request.only(['email', 'password']);
        const token = await auth.use('api').attempt(data.email, data.password);
        return response.ok({ token });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map