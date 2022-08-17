import prisma from '../4- Infrastructure/bd.js';
import AuthService from '../3- Services/AuthService.js';
import bcrypt from 'bcrypt';

const AuthAppService = {
    async login(email, password, res) {
        const user = await prisma.user.findFirst({where: {email}});
        if(!user) throw new Error("User not found");

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) throw new Error("Senha incorreta");

        const logged = await prisma.user.update({where: {email}, data: {islogged: true}});

        return logged.islogged;
        },

    async signup(req, res){
        req.body.islogged = false;
        var now = new Date();
        req.body.updated_at = now;
        req.body.created_at = now;
        console.table(req.body);
        const user = await prisma.user.create({data: req.body});
        
        return user;
    }
};

export default AuthAppService;