import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { REACT_APP_SERVER } from "../../../../grobalVars"

export default function DashProfile() {
  const user = useSelector(state => state.user);
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const [regis_no, setRegis_no] = useState("");
  const [year, setYear] = useState(-1);
  const [linkedin, setLinkedin] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      setName(user.name);
      setRegis_no(user.registration_no);
      setYear(user.year);
      setLinkedin(user.linkedin_url);
    }
  }, [user]);

  const handleSaveChange = () => {

    if (parseInt(regis_no[4]) === 7) {
      toast.warn('Invalid registration number !')
      return
    }

    if (year && year <= 4) {
      setDisabled(true);
      setLoading(true);
      fetch(`${REACT_APP_SERVER}/api/my/updateProfile`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify({
          name,
          regis_no,
          year,
          linkedin,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) toast.warn(data.error);
          else {
            dispatch({ type: "SET", payload: data.user });
            toast.success("Profile updated successfully !");
            setLoading(false);
          }
        });
    } else toast.warn("Year must be between 1-4 !");
  };

  return (
    <div className="container">
      <div className="mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label font-weight-bold">
          Name :{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            disabled={disabled}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">
          Email :{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="email"
            value={user?.email}
            disabled
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="regis" className="col-sm-2 col-form-label font-weight-bold">
          Registration no. :{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="regis"
            value={regis_no}
            disabled={disabled}
            onChange={(e) => setRegis_no(e.target.value)}
            maxLength={8}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="year" className="col-sm-2 col-form-label font-weight-bold">
          Year :{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            min={1}
            max={4}
            maxLength={1}
            className="form-control"
            id="year"
            value={year}
            disabled={disabled}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="linkedin" className="col-sm-2 col-form-label font-weight-bold">
          Linkedin URL :{" "}
        </label>
        <div className="col-sm-10">
          <input
            type="url"
            className="form-control"
            id="linkedin"
            value={linkedin}
            disabled={disabled}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
      {disabled ? (
        <button
          className="btn btn-primary mr-2 my-1"
          onClick={() => setDisabled(false)}
        >
          {loading ? "loading..." : "Edit Profile"}
        </button>
      ) : (
        <>
          <button className="btn btn-primary my-1" onClick={handleSaveChange}>
            Save Changes
        </button>
          <button className="btn btn-primary mx-1 my-1" onClick={() => setDisabled(true)}>
            Cancel
        </button>
        </>
      )}
      <a className="btn btn-success mr-1 my-1" href='https://docs.google.com/document/d/1jrgm6h7DVs173Cjfc2kjc32yuPFj0R4TFRNsdN6E150/edit?usp=sharing' target='_blank'>Resources</a>
      {user?.role !== "User" && (
        <a className="btn btn-danger mx-1" href="/1208e2fe-b5f6-439b-94e0-aef5dde3b777/admin" target='_blank'>
          Go to Admin Panel
        </a>
      )}
    </div>
  );
}
