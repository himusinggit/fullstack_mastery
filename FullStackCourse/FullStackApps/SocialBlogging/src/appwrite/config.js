import { Client, ID, TablesDB, Storage, Query } from "appwrite";
import conf from "../conf/conf";
class Service{
    client = new Client();
    tablesDB;
    storage;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        tablesDB = new TablesDB(client);
        storage = new Storage(client);
    }
    async createRow(slug,{title,content,featuredImages,status,userId}){
        try {
            return await tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: { 'title':title,'content':content,'featuredImages':featuredImages,'status':status,'userId':userId }, // { title,content,'featuredImages,status,userId }
            });
        } catch (error) {
            console.log(error);
        }
    }
    async updateRow(slug,{title,content,featuredImages,status}){
        try {
            return await tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {'title':title,'content':content,'featuredImages':featuredImages,'status':status}, // optional
            });
        } catch (error) {
            throw error;
        }
    }
    async deleteRow(slug){
        try {
            await tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getRow(slug){
        try {
            return await tablesDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            });
        } catch (error) {
            console.log(error);
        }
    }
    async getRows(querries=[Query.equal('status','active')]){
        try {
            return  await tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                queries: querries 
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async uploadFile(file){
        try {
            return await storage.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await storage.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            });
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }
    getFilePreview(fileId){
        try {
            return storage.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
            });

        } catch (error) {
            console.log(error);
            return false
        }
    }
}

const appwriteService=new Service();
export default appwriteService;