import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseURL, baseTitle } from '../../baseUtils'

export default function Confirmation() {

    const { token } = useParams()
    const history = useHistory()
    document.title = `${baseTitle} | Confirmation`

    useEffect(() => {
        if (token) {
            fetch(`${baseURL}/api/user/confirm`, {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        toast.success(data.error)
                        history.push('/')
                    }
                    else {
                        toast.success(data.message)
                        history.push('/user/login')
                    }
                })
        }
    }, [])

    return (
        <div>
            <h1>loading...!</h1>
        </div>
    )
}
