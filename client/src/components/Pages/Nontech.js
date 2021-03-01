import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/coordinators&Nontech/Nilotpal Mukherjee.jpeg";
import f2 from "../../images/coordinators&Nontech/Purushotam Kumar Agrawal.jpg";
import f3 from "../../images/coordinators&Nontech/Aditya Gupta.jpeg";
import f4 from "../../images/coordinators&Nontech/Rishank B.jpeg";
import f5 from "../../images/coordinators&Nontech/Rahul Verma.jpg";
import f6 from "../../images/coordinators&Nontech/Saptarshi Roy Chowdhury.jpg";
import f7 from "../../images/coordinators&Nontech/Apanshula Shourie.jpeg";
import f8 from "../../images/coordinators&Nontech/Maaz.jpg";
import f9 from "../../images/coordinators&Nontech/Abhas Raj.jpg";
import f10 from "../../images/coordinators&Nontech/Prakhar jain.jpg";
import f11 from "../../images/coordinators&Nontech/Prasanna Sneha.jpg";
import f12 from "../../images/coordinators&Nontech/Devansh Sethi.jpg";
// import f13 from "../../images/coordinators&Nontech/.jpg";

export default function Nontech() {
  document.title = "Non-Tech | Aero Club";

  const members = [
    {
      emailAddress: "nilotpalmukherjee.909@gmail.com",
      name: "NILOTPAL MUKHERJEE",
      year: "3rd",
      team: "Design",
      linkedinId: "https://www.linkedin.com/in/nilotpal-mukherjee-579249196",
      profilePicture: f1,
    },
    {
      emailAddress: "Agrawalpurushotam@gmail.com",
      name: "Purushotam Kumar Agrawal",
      year: "2nd",
      team: "Outreach",
      ifWebThenRoboOrAero: "Robo",
      linkedinId: "https://www.linkedin.com/in/puru2411",
      profilePicture: f2,
    },
    {
      emailAddress: "aditya.20192074@mnnit.ac.in",
      name: "Aditya Gupta",
      year: "2nd",
      team: "Design",
      linkedinId: "https://www.linkedin.com/in/aditya-gupta-916304199",
      profilePicture: f3,
    },
    {
      emailAddress: "rishankb575@gmail.com",
      name: "Rishank Barua",
      year: "2nd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/rishank-barua-3413821b9/",
      profilePicture: f4,
    },
    {
      emailAddress: "rahulvermadbm@gmail.com",
      name: "Rahul Verma",
      year: "2nd",
      team: "Outreach",
      ifWebThenRoboOrAero: "Robo",
      linkedinId: "https://www.linkedin.com/in/rahul-verma-0406021b3",
      profilePicture: f5,
    },
    {
      emailAddress: "saptarshroyc@gmail.com",
      name: "Saptarshi Roy Chowdhury",
      year: "3rd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/saptarshi-roy-c-5bb29b92",
      profilePicture: f6,
    },
    {
      emailAddress: "apanshula.20193143@mnnit.ac.in",
      name: "Apanshula Shourie",
      year: "2nd",
      team: "Design",
      linkedinId: "Apanshula Shourie",
      profilePicture: f7,
    },
    {
      emailAddress: "maazshuaib18@gmail.com",
      name: "Maaz",
      year: "2nd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/maaz-shuaib-baa715206",
      profilePicture: f8,
    },
    {
      emailAddress: "abhasraj177@gmail.com",
      name: "Abhas Raj",
      year: "3rd",
      team: "Design",
      linkedinId: "https://www.linkedin.com/in/abhas-raj-333360179",
      profilePicture: f9,
    },
    {
      emailAddress: "prakhar21102001@gmail.com",
      name: "Prakhar jain",
      year: "2nd",
      team: "Outreach",
      profilePicture: f10,
    },
    {
      emailAddress: "prasannasneha1322@gmail.com",
      name: "Prasanna Sneha",
      year: "2nd",
      team: "Content",
      ifWebThenRoboOrAero: "Aero",
      linkedinId: "https://www.linkedin.com/in/prasanna-sneha-2211200013",
      profilePicture: f11,
    },
    {
      emailAddress: "devanshsethi77@gmail.com",
      name: "Devansh Sethi",
      year: "2nd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/devansh-sethi-2a97721b3",
      profilePicture: f12,
    },
    {
      emailAddress: "hamzasiddqui999@gmail.com",
      name: "Hamza Siddiqui",
      year: "Final",
      team: "Design",
      profilePicture: "",
    },
  ];

  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Non-Tech Members</div>
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Content Team
      </div>
      <div className="container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.team === "Content" && (
                <div
                  class="card card-item shadow"
                  style={{ width: "17rem" }}
                  key={i}
                >
                  <img
                    class="card-img-top"
                    src={`${member.profilePicture}`}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 class="card-title text-center text-uppercase">
                      {member.name}
                    </h5>
                    <p class="card-text text-center">{member.year} year</p>
                    <a
                      class="btn btn-danger mx-auto"
                      data-toggle="collapse"
                      href={`#collapseExample${i}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`collapseExample${i}`}
                    >
                      More
                    </a>
                    <div className="collapse" id={`collapseExample${i}`}>
                      <div className="container">
                        <strong>Email : </strong> {member.emailAddress} <br />
                        <div className="d-flex justify-content-center mt-4">
                          <a href={member.linkedinId} target="_blank">
                            <i class="fab fa-linkedin fa-3x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Design Team
      </div>
      <div className="container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.team === "Design" && (
                <div
                  class="card card-item shadow"
                  style={{ width: "17rem" }}
                  key={i}
                >
                  <img
                    class="card-img-top"
                    src={`${member.profilePicture}`}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 class="card-title text-center text-uppercase">
                      {member.name}
                    </h5>
                    <p class="card-text text-center">{member.year} year</p>
                    <a
                      class="btn btn-danger mx-auto"
                      data-toggle="collapse"
                      href={`#collapseExample${i}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`collapseExample${i}`}
                    >
                      More
                    </a>
                    <div className="collapse" id={`collapseExample${i}`}>
                      <div className="container">
                        <strong>Email : </strong> {member.emailAddress} <br />
                        <div className="d-flex justify-content-center mt-4">
                          <a href={member.linkedinId} target="_blank">
                            <i class="fab fa-linkedin fa-3x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Outreach Team
      </div>
      <div className="container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.team === "Outreach" && (
                <div
                  class="card card-item shadow"
                  style={{ width: "17rem" }}
                  key={i}
                >
                  <img
                    class="card-img-top"
                    src={`${member.profilePicture}`}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 class="card-title text-center text-uppercase">
                      {member.name}
                    </h5>
                    <p class="card-text text-center">{member.year} year</p>
                    <a
                      class="btn btn-danger mx-auto"
                      data-toggle="collapse"
                      href={`#collapseExample${i}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`collapseExample${i}`}
                    >
                      More
                    </a>
                    <div className="collapse" id={`collapseExample${i}`}>
                      <div className="container">
                        <strong>Email : </strong> {member.emailAddress} <br />
                        <div className="d-flex justify-content-center mt-4">
                          <a href={member.linkedinId} target="_blank">
                            <i class="fab fa-linkedin fa-3x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
