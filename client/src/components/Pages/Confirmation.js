import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Confirmation() {

    const { token } = useParams()
    const history = useHistory()

    useEffect(() => {
        if (token) {
            fetch('/api/user/confirm', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
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
