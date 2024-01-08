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
exports.UserService = void 0;
const response_1 = require("app/utility/response");
class UserService {
    constructor() { }
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Create user" });
        });
    }
    UserLogin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from User Login" });
        });
    }
    VerifyUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Verify User" });
        });
    }
    // User Profile
    CreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Create Profile" });
        });
    }
    GetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Get Profile" });
        });
    }
    EditProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Edit Profile" });
        });
    }
    // Cart Section
    CreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Create Cart" });
        });
    }
    GetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Get Cart" });
        });
    }
    EditCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Edit Cart" });
        });
    }
    //Payment
    CreatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Create Payment" });
        });
    }
    UpdatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Update Payment" });
        });
    }
    GetPaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SucessResponse)({ message: "Response from Get Payment" });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map