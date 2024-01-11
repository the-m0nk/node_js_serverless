import { APIGatewayProxyEventV2 } from "aws-lambda";
import { ErrorResponse, SucessResponse } from "../utility/response";
import { UserRepository } from "../repository/userRepository";
import { autoInjectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { SignupInput } from "../models/dto/SignUpInput";
import { AppValidatorError } from "../utility/errors";
import { } from "../utility/password"

@autoInjectable()
export class UserService {
  repository: UserRepository; // Adding property
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const requestBody = JSON.parse(event.body);
      const input = plainToClass(SignupInput, requestBody);
      const error = await AppValidatorError(input);
      if (error) return ErrorResponse(404, error);

      const salt = "";
      const hashedPassword = "";
      const data = await this.repository.createAccount({
        email : input.email,
        password : hashedPassword,
        phone : input.phone,
        userType : "BUYER",
        salt : salt
      })
      return SucessResponse({});
    } catch (error) {
      console.log(error);
      return ErrorResponse(500, error);
    }
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from User Login" });
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Verify User" });
  }

  // User Profile

  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Create Profile" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Get Profile" });
  }

  async EditProfile(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Edit Profile" });
  }

  // Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Create Cart" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Get Cart" });
  }

  async EditCart(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Edit Cart" });
  }

  //Payment

  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Create Payment" });
  }
  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Update Payment" });
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Get Payment" });
  }
}
