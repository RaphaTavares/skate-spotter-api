import prisma from '../4- Infrastructure/bd.js';
import AuthService from '../3- Services/AuthService.js';
import bcrypt from 'bcrypt';

const AuthAppService = {
    async login(email, password, res) {
        const user = await prisma.user.findFirst({where: {email}});
        if(!user) throw new Error("User not found");

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) throw new Error("Senha incorreta");

        const { accessToken } = AuthService.createUserTokens(user);

        return { accessToken };
        },

    async signup(req, res){
        const user = await prisma.user.create({data: req.body});

        const { accessToken } = AuthService.createUserTokens(user);

        return { accessToken };
    }
};

export default AuthAppService;