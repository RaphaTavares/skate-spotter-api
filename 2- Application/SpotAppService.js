import prisma from '../4- Infrastructure/bd.js';
import AuthService from '../3- Services/SpotService.js';

const AuthAppService = {
    // async create_spot(email, password) {
    //     const spot = await prisma.user.findFirst({where: {email}});
    //     if(!user) throw new Error("User not found");

    //     const valid = await bcrypt.compare(password, user.password);
    //     if(!valid) throw new Error("Senha incorreta");

    //     const { accessToken } = AuthService.createUserTokens(user);

    //     return { accessToken };
    //     },

    async create_spot(req){
        const spot = await prisma.spot.create({data: req.body});

        return spot;
    }
};

export default AuthAppService;