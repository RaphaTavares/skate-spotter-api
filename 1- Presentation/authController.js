import AuthAppService from '../2- Application/AuthAppService.js';

const AuthController = {
    async login_post(req, res){

      try{
        const { email, password } = req.body;
    
        const logged = await AuthAppService.login(email, password, res);
        
          res.status(200).send(logged);
       }
      catch (e){
        res.status(400).send(e.message);
      }
    },
    async signup_post(req, res){
      try{
        console.log("to aqui");
        await AuthAppService.signup(req, res);
     
           res.status(200).send(true);
        }
        catch (e){
          console.log("to na exception" + e.message);
          res.status(400).send(e.message);
        }
      },
      async signout_post(req, res){
        try{
          await AuthAppService.signout(req, res);

          res.status(200).send("deslogado");
        }
        catch(e){
          res.status(400).send(e.message);
        }
      }
}

export default AuthController;