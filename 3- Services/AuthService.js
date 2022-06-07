import jwt from "jsonwebtoken";

const AuthService = {
    createUserTokens(user) {
        const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
        const accessSecret = process.env.ACCESS_TOKEN_SECRET;

        const refreshToken = jwt.sign(
            { userId: user.id, isAdmin: user.isAdmin },
            refreshSecret,
            {
            expiresIn: "7d",
            }
        );
        const accessToken = jwt.sign(
            { userId: user.id, isAdmin: user.isAdmin },
            accessSecret,
            {
            expiresIn: "3h",
            }
        );

        return { refreshToken, accessToken };
    },
}

export default AuthService;