import { APIGatewayProxyEventV2 } from "aws-lambda";
import { ErrorResponse, SucessResponse } from "../utility/response";
import { UserRepository } from "../repository/userRepository";
import { autoInjectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { SignupInput } from "../models/dto/SignUpInput";
import { AppValidatorError } from "app/utility/errors";

@autoInjectable()
export class UserService {
  repository: UserRepository; // Adding property
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async CreateUser(event: APIGatewayProxyEventV2) {
    const input = plainToClass(SignupInput, event.body);
    const error = await AppValidatorError(input);
    if (error) return ErrorResponse(404, error);

    // await this.repository.CreateUserOperation();
    return SucessResponse(input);
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
