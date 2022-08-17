import cookieParser from 'cookie-parser';
import jwt from'jsonwebtoken';

const requireAuth = (req, res, next) =>{
       
    const valido = req.cookies["islogged"];
    if(valido){
        return next();
    }else{
        res.status(401).send("error: not authenticated");
    }
}

export default  requireAuth;