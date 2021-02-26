import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/Login.css";
import { toast } from "react-toastify";

function Signup() {
  document.title = "Signup | Aero Club";

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) history.push("/404");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      toast.warn("passwords do not match !");
      return;
    }

    fetch(`/api/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.warn(data.error);
        else {
          toast.success(data.message);
          history.push("/user/login");
          window.location.reload();
        }
      });
  };

  return (
    <div className="login rounded-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin mt-5 mb-3">
              <div className="card-body">
                <h5
                  className="card-title text-center font-weight-bold"
                  id="heading"
                >
                  Account Signup
                </h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputname"
                      className="form-control"
                      placeholder="Name"
                      required
                      autoFocus
                      ref={name}
                    />
                    <label htmlFor="inputname">Name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Gsuite Email Address"
                      required
                      autoFocus
                      ref={email}
                    />
                    <label htmlFor="inputEmail">Gsuite Email Address</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                      ref={password}
                    />
                    <label htmlFor="inputPassword">Password</label>
                    <em style={{ fontSize: "x-small" }}>
                      * password must between 8-15 characters containing at
                      least one lowercase and one uppercase letter, one numeric
                      digit, and one special character
                    </em>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputretypePassword"
                      className="form-control"
                      placeholder="Retype Password"
                      required
                      ref={confirmPassword}
                    />
                    <label htmlFor="inputretypePassword">Retype Password</label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                  <hr className="my-4" />
                  <div className="para">
                    <p>
                      Already have an account?{" "}
                      <Link to="/user/login">Signin</Link>
                    </p>
                    <button type="button" className="btn btn-dark">
                      <Link
                        to="/"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Back to Home
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
