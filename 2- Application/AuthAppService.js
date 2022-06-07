import prisma from '../4- Infrastructure/bd.js';
import AuthService from '../3- Services/AuthService.js';
import bcrypt from 'bcrypt';

const AuthAppService = {
    async login(email, password, res) {
        const user = await prisma.user.findFirst({where: {email}});
        if(!user) return null;

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) throw new Error("Senha incorreta");

        const { accessToken, refreshToken } = AuthService.createUserTokens(user);

        return { accessToken, refreshToken };
        },

    async signup(req, res){
      try{
        const user = await prisma.user.create({data: req.body});
        const {accessToken, refreshToken} = AuthService.createUserTokens(user);
        return { accessToken, refreshToken };
    } catch(err){
        //const errors = handleErrors(err);
        console.log("ERROR MESSAGE: " + err.message)
        res.sendStatus(400).json({err: err.message});
    }
    }
};

export default AuthAppService;