import  {UserModel} from  "../models/useModel";
export class UserRepository {
    constructor () {}
        
    async createAccount({email , password , salt , phone , userType} : UserModel) {
        // DB Operation

    }
    
}