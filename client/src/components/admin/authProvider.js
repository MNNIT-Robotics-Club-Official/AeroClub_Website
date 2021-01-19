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
                localStorage.setItem('token', data.token)
                localStorage.setItem('role', data.role)
            })
            .catch(e => {
                throw new Error(e)
            })
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
    },
    logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        return Promise.resolve('/login')
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 422) {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            return Promise.reject({ redirectTo: '/login' });
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        const role = localStorage.getItem('role')
        role === 'admin' ? Promise.resolve(role) : Promise.reject()
    },
}

export default authProvider