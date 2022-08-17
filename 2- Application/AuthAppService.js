import prisma from '../4- Infrastructure/bd.js';
import AuthService from '../3- Services/AuthService.js';
import bcrypt from 'bcrypt';

const AuthAppService = {
    async login(email, password, res) {
        console.log("DOIS");

        const user = await prisma.user.findFirst({where: {email}});
        if(!user) throw new Error("User not found");
        
        console.log("UM");

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) throw new Error("Senha incorreta");

        console.log('to aqui dentrinho');
        const logged = await prisma.user.update({where: {email}, data: {islogged: true}});
        
        console.log("não passou");
        res.cookie("islogged", logged.islogged, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
            sameSite: "none",
        });

        console.log("passou");
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
    },

    async signout(req, res){
        res.cookie("islogged", false, {
            expires: new Date(Date.now() + 3),
            sameSite: "none",
        });

        console.log(req.body.email);
        await prisma.user.update({where: {email: req.body.email}, data: {islogged: false}});

        return true;
    }
};

export default AuthAppService;