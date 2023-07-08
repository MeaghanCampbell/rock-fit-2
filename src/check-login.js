let checkLogin = function() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.replace('/login');
    } else {
        const tokenParts = token.split('.');
        if (tokenParts.length === 3) {
            const payload = JSON.parse(atob(tokenParts[1]));
            const currentTime = Math.floor(Date.now() / 1000);

            if (payload.exp < currentTime) {
                localStorage.removeItem('token');
                window.location.replace('/login');
            }
        }
    }
}

export { checkLogin }