const authProvider = {
    login: ({ username, password }) => {

        const request = new Request('/admin/login', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
        return fetch(request)
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.error) {
                    throw new Error(data.error);
                }
                localStorage.setItem('adminAuth', JSON.stringify({ token: data.token }))
            })
            .catch(e => {
                throw new Error(e)
            })
    },
    checkAuth: () => {
        return localStorage.getItem('adminAuth') ? Promise.resolve() : Promise.reject()
    },
    logout: () => {
        localStorage.removeItem('adminAuth')
        return Promise.resolve('/login')
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 422) {
            localStorage.removeItem('adminAuth');
            return Promise.reject({ redirectTo: '/login' });
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
}

export default authProvider