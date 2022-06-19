import AuthAppService from '../2- Application/AuthAppService.js';

// const createToken = id => {
//     return jwt.sign({ id }, jwtSecret, {
//         expiresIn: '2h'
//     });
// }

const AuthController = {
    async login_post(req, res){

      try{
        const { email, password } = req.body;
    
        var { accessToken } = await AuthAppService.login(email, password, res);
        
        if(accessToken)
        {
        res.cookie("access-token", accessToken, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
            sameSite: "none",
          });
          res.sendStatus(201);
        }
      }
      catch (e){
        res.status(400).send(e.message);
      }
    },
    async signup_post(req, res){
      try{
        var { accessToken } = await AuthAppService.signup(req, res);
     
        if(accessToken){
            res.cookie("access-token", accessToken, {
             expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
             sameSite: "none",
           });
           res.sendStatus(200);
        }
      }
        catch (e){
          res.status(400).send(e.message);
        }
     }
}

export default AuthController;