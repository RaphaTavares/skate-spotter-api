import SpotAppService from '../2- Application/SpotAppService.js';

const AuthController = {
    async create_spot(req, res){
      try{
        const spot = SpotAppService.create_spot(req);
      }
      catch (e){

    }
    },
    async signup_post(req, res){
      try{
        
      }
        catch (e){

        }
     }
}

export default AuthController;