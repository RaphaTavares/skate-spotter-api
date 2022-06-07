export default AuthService = {
    createUserTokens(user) {
        const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
        const accessSecret = process.env.ACCESS_TOKEN_SECRET;

        const refreshToken = sign(
            { userId: user.id, jwt_validator: user.jwt_validator, role: user.role },
            refreshSecret,
            {
            expiresIn: "7d",
            }
        );
        const accessToken = sign(
            { userId: user.id, jwt_validator: user.jwt_validator, role: user.role },
            accessSecret,
            {
            expiresIn: "3h",
            }
        );

        return { refreshToken, accessToken };
    },
}