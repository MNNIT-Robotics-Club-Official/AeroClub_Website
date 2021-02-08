import React, { useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../css/Login.css'

function Login() {

	const email = useRef()
	const password = useRef()
	const history = useHistory()

	useEffect(() => {
		if (localStorage.getItem('jwtToken')) history.push('/404')
	}, [])

	const handleSubmit = (e) => {

		e.preventDefault()


		if (localStorage.getItem('jwtToken')) {
			toast.success('User logged In successfully !')
			history.push('/user/dashboard')
		}

		fetch('/api/signin', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email.current.value,
				password: password.current.value,
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) toast.warn(data.error)
				else {
					localStorage.setItem('jwtToken', data.token)
					toast.success(data.message)
					history.push('/user/dashboard')
					window.location.reload()
				}
			})
	}

	return (
		<div className="login">
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center font-weight-bold" id="heading">Account login</h5>
								<form className="form-signin">
									<div className="form-label-group">
										<input type="email" id="inputEmail" className="form-control" placeholder="Gsuite Email Address" required autoFocus ref={email} />
										<label htmlFor="inputEmail">Gsuite Email Address</label>
									</div>

									<div className="form-label-group">
										<input type="password" id="inputPassword" className="form-control" placeholder="Password" required ref={password} />
										<label htmlFor="inputPassword">Password</label>
									</div>

									{/* <div className="custom-control custom-checkbox mb-3">
										<input type="checkbox" className="custom-control-input" id="customCheck1" />
										<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
									</div> */}
									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={handleSubmit}>Sign in</button>
									<hr className="my-4" />
									<div className="para">
										<p><Link to="/user/forgotpassword">Forgot Password ?</Link></p>
										<p>Don't have an account? <Link to="/user/signup">Signup</Link></p>
										<button type="button" className="btn btn-dark"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Back to Home</Link></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Login
