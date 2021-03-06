import jwt from "jsonwebtoken";

const AuthService = {
    createUserTokens(user) {
        const accessSecret = process.env.ACCESS_TOKEN_SECRET;

        const accessToken = jwt.sign(
            { userId: user.id, isAdmin: user.isAdmin },
            accessSecret,
            {
            expiresIn: "3h",
            }
        );

        return { accessToken };
    },
}

export default AuthService;