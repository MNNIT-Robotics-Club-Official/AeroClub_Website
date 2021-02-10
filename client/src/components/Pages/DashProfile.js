import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function DashProfile({ user, setUser }) {

    const [disabled, setDisabled] = useState(true)
    const [name, setName] = useState('')
    const [regis_no, setRegis_no] = useState('')
    const [year, setYear] = useState(-1)
    const [linkedin, setLinkedin] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setName(user.name)
        setRegis_no(user.registration_no)
        setYear(user.year)
        setLinkedin(user.linkedin_url)
    }, [user])

    const handleSaveChange = () => {
        if (year <= 4) {
            setDisabled(true)
            setLoading(true)
            fetch('/api/my/updateProfile', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                },
                body: JSON.stringify({
                    name,
                    email: user.email,
                    registration_no: regis_no,
                    year,
                    linkedin_url: linkedin
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) toast.warn(data.error)
                    else {
                        setUser(data.user)
                        toast.success('Profile updated successfully !')
                        setLoading(false)
                    }
                })
        }
        else toast.warn('Year must be between 1-4 !')
    }

    return (
        <div className="container">
            <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label fw-blold">Name : </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" value={name} disabled={disabled} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div class="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email : </label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" value={user.email} disabled />
                </div>
            </div>
            <div class="mb-3 row">
                <label htmlFor="regis" className="col-sm-2 col-form-label">Registration no. : </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="regis" value={regis_no} disabled={disabled} onChange={(e) => setRegis_no(e.target.value)} maxLength={8} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="year" className="col-sm-2 col-form-label">Year : </label>
                <div className="col-sm-10">
                    <input type="number" min="1" max="4" maxLength="1" className="form-control" id="year" value={year} disabled={disabled} onChange={(e) => setYear(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="linkedin" className="col-sm-2 col-form-label">Linkedin URL : </label>
                <div className="col-sm-10">
                    <input type="url" className="form-control" id="linkedin" value={linkedin} disabled={disabled} onChange={(e) => setLinkedin(e.target.value)} />
                </div>
            </div>
            {
                disabled ?
                    <button className="btn btn-primary" onClick={() => setDisabled(false)}>{loading ? 'loading...' : 'Edit Profile'}</button>
                    :
                    <button className="btn btn-primary" onClick={handleSaveChange}>Save Changes</button>
            }
        </div>
    )
}
