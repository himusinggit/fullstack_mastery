import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId); 
        this.account = new Account(this.client);
    }
    async login({email,password}){

        try {
        const User = await this.account.createEmailPasswordSession({email,password});
        return User;
        } catch (error) {
            throw error;
        }
    }
    async createAccount({name,email,password}){
        try {
            const userAccount=await this.account.create({
                        userId: ID.unique(),
                        email: email,
                        password: password,
                        name:name
                    });
            if(userAccount){
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
        
    }

    async getUser(){
        try{
            return await this.account.get();
        }catch(error){
            throw error;
        }
        return null;
    }
    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            throw error;
        }
    }
}
const authService=new AuthService();
export default authService;