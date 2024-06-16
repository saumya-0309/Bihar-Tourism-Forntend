const TOKEN_STORE_NAME = "token";


export const getTokens = () => {
    const data = localStorage.getItem(TOKEN_STORE_NAME);
    if (data) {
        const token= JSON.parse(data)
        return {
            accessToken: token,
        }
    } else {
        return {
            accessToken: '',
        }
    }
}
