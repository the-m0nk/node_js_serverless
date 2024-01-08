import { APIGatewayProxyEventV2 } from "aws-lambda";
import { SucessResponse, ErrorResponse } from "app/utility/response";

export class UserService {
  constructor() {}

  async CreateUser(event: APIGatewayProxyEventV2) {
    return SucessResponse({ message: "Response from Create user" });
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
