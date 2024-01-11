export interface UserModel {
    user_id? :string;  // Primary Key
    email : string;
    phone : string;
    password: string;
    salt : string;
    userType : "BUYER" | "SELLER";
}