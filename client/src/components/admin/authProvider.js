import { HttpError } from "react-admin"

const authProvider = {

    login: ({ username, password }) => {
        return localStorage.getItem('jwtToken') ?
            fetch('/api/adminlogin', {
                method: 'post',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ email: username, password })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.error) throw new Error(data.error)
                    else {
                        localStorage.setItem('role', data.role)
                    }
                })
            :
            Promise.reject(new HttpError('User must be logged in !', 401))
        // notify('User must be logged in !')
        // // throw new HttpError(, 401)
    },
    checkAuth: () => {
        return localStorage.getItem('role') ? Promise.resolve() : Promise.reject()
    },
    logout: () => {
        localStorage.removeItem('role')
        return Promise.resolve()
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 422 || status === 401 || status === 403) {
            localStorage.removeItem('role')
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve()
}

export default authProvider