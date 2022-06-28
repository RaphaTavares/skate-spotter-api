import { JSONCookies } from 'cookie-parser';
import jwt from'jsonwebtoken';

const jwtScret = process.env.ACCESS_TOKEN_SECRET;

const requireAuth = (req, res, next) =>{
    try{
        const token = req.cookies;

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
    }
}
    catch(e){
        res.status(401).json({error: 'no token'});
    }
}

export default  requireAuth;