import AuthAppService from '../2- Application/AuthAppService.js';

// const createToken = id => {
//     return jwt.sign({ id }, jwtSecret, {
//         expiresIn: '2h'
//     });
// }

const AuthController = {
    login_post(req, res){
        const { email, password } = req.body;
    
        var { accessToken, refreshToken } = AuthAppService.login(email, password, res);
    
        if(accessToken && refreshToken)
        {
        res.cookie("access-token", accessToken, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
            sameSite: "none",
          });
          res.cookie("refresh-token", refreshToken, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            sameSite: "none",
          });
    
          res.sendStatus(201);
        }
    
        res.sendStatus(400);
    },
    async signup_post(req, res){
        var {accessToken, refreshToken} = await AuthAppService.signup(req, res);
     
        if(accessToken && refreshToken){
            res.cookie("access-token", accessToken, {
             expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
             sameSite: "none",
           });
            res.cookie("refresh-token", refreshToken, {
             expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
             sameSite: "none",
           });
     
           res.sendStatus(201);
        }
     }
}

export default AuthController;