import { PrismaClient } from "@prisma/client";
import HashService from "../3- Services/HashService.js";
const prisma = new PrismaClient({ log: ["query"]});

prisma.$use(async (params, next) => {
    if(params.model === "user" && (params.action === "create" || params.action === "update") && params.args.data.password){
            params.args.data.password = await HashService.generateHash(params.args.data.password);
    }
    if(params.action === "create"){
        params.args.data.created_at = new Date();
    }
    else if(params.action === "update"){
        params.args.data.updated_at = new Date();
    }

    const result = await next(params);
    return result;
});

export default prisma;