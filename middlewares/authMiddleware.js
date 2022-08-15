import { JSONCookies } from 'cookie-parser';
import jwt from'jsonwebtoken';

const requireAuth = (req, res, next) =>{
    const token = req.body.token;
    const jwtSecret = process.env.ACCESS_TOKEN_SECRET;
    
    if(token){
        jwt.verify(token, jwtSecret, (err, decodedToken) =>{
            if(err){
                console.log(err.message);
                res.status(401).json({error: err.message});
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }else{
        res.status(401).json({error: 'no token'});
    }
}

export default  requireAuth;