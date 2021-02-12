import React, { useState } from "react";
import { baseURL } from "../../baseUtils"

export default function ProjForm(props) {
  const [formData, setformData] = useState({
    title: "",
    teamname: "",
    description: "",
    objective: "",
  });
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        fetch(`${baseURL}/api/projects`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
          body: JSON.stringify({
            title: formData.title,
            teamname: formData.teamname,
            description: formData.description,
            objective: formData.objective,
          }),
        })
          .then((res) => {
            console.log("done");
            console.log(res);
            setLoading(false);
            setformData({
              title: "",
              teamname: "",
              description: "",
              objective: "",
            });
            props.setr(props.r + 1)
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
            setLoading(false);
            setformData({
              title: "",
              teamname: "",
              description: "",
              objective: "",
            });
          });
      }}
    >
      <div className="form-floating mb-3">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          value={formData.title}
          onChange={(e) => {
            setformData(prev => ({
              ...prev,
              title: e.target.value
            }))
          }}
        />
      </div>
      <div className="form-floating mb-3">
        <label for="teamName">Team Name</label>

        <input
          type="text"
          class="form-control"
          id="teamName"
          required
          value={formData.teamname}
          onChange={(e) => {
            setformData(prev => ({
              ...prev,
              teamname: e.target.value
            }))
          }}
        />
      </div>
      <div class="form-floating mb-3">
        <label for="description">Description</label>

        <textarea
          class="form-control"
          id="description"
          required
          value={formData.description}
          onChange={(e) => {
            setformData(prev => ({
              ...prev,
              description: e.target.value
            }))
          }}
        ></textarea>
      </div>
      <div className="form-floating mb-3">
        <label for="objective">Objective</label>

        <input
          type="text"
          class="form-control"
          id="objective"
          required
          value={formData.objective}
          onChange={(e) => {
            setformData(prev => ({
              ...prev,
              objective: e.target.value
            }))
          }}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        {loading ? "loading..." : "Submit"}
      </button>
    </form>
  );
}
