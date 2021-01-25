import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Login.css'

function Login() {
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
										<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
										<label htmlFor="inputEmail">Email address</label>
									</div>

									<div className="form-label-group">
										<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
										<label htmlFor="inputPassword">Password</label>
									</div>

									<div className="custom-control custom-checkbox mb-3">
										<input type="checkbox" className="custom-control-input" id="customCheck1" />
										<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
									</div>
									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
									<hr className="my-4" />
									<div className="para">
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
