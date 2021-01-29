const authProvider = {
    login: ({ username, password }) => {
        const request = new Request('/api/signin', {
            method: 'post',
            body: JSON.stringify({ email: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
        return fetch(request)
            .then(res => {
                return res.json()
            })
            .then(data1 => {
                if (data1.error) throw new Error(data1.error);

                return fetch('/api/isAdmin', {
                    method: 'post',
                    headers: {
                        "Authorization": `Bearer ${data1.token}`
                    }
                })
                    .then(res => res.json())
                    .then(data2 => {
                        if (data2.error) throw new Error(data2.error)
                        localStorage.setItem('jwtToken', data1.token)
                    })
            })
            .catch(e => {
                throw new Error(e)
            })
    },
    checkAuth: () => {
        return localStorage.getItem('jwtToken') ? Promise.resolve() : Promise.reject()
    },
    logout: () => {
        localStorage.removeItem('jwtToken')
        return Promise.resolve()
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 422 || status === 401 || status === 403) {
            localStorage.removeItem('jwtToken')
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve()
}

export default authProvider