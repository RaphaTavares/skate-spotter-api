import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"]});

prisma.$use(async (params, next) => {
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