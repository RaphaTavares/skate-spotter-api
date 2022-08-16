import SpotAppService from '../2- Application/SpotAppService.js';

const SpotController = {
    async get_all(req, res){

      try{
        var spots = await SpotAppService.getAll();
        res.status(200).send(spots);
    }
      catch (e){
        res.status(400).send(e.message);
      }
    },
    async get_by_id(req, res){
      try{
        const { id } = req.query;
        var spot = await SpotAppService.getById(id);
        res.status(200).send(spot);
    }
        catch (e){
          res.status(400).send(e.message);
        }
     }
}

export default SpotController;