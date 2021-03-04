import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/alumni/sunil saini.jpg";
import f2 from "../../images/alumni/Surendra Singh Jayant.jpg";
import f3 from "../../images/alumni/SHREY Dixit.jpg";
import f4 from "../../images/alumni/Robin Zachariah.jpg";
import f5 from "../../images/alumni/rahul thakur.jpg";
import f6 from "../../images/alumni/Mohammed Maaz Latifee.jpg";
import f7 from "../../images/alumni/Vaibhav Jha.jpg";
import f8 from "../../images/alumni/Soumya Khanna.jpeg";
import f9 from "../../images/alumni/Aman Sharma(1).jpg";
import f10 from "../../images/alumni/sarita chaudhary1.jpeg";
import f11 from "../../images/alumni/unnamed.jpg";
import f12 from "../../images/alumni/Kishan Tiwari.jfif";

export default function Alumni() {
  document.title = "Alumni | Aero Club";

  const members = [
    {
      name: "Sunil Kumar saini",
      yearOfGraduation: 2019,
      presentOrganisation: "John Deere India Pvt. Ltd.",
      presentLocation: "Indore, Madhya Pradesh",
      yourLinkedinId: "https://www.linkedin.com/in/sunilsaini233601",
      yourContactInformationEmail: "sunilnit22@gmail.com",
      yourContactInformationPhoneNumber: 8003238261,
      aPhotoForWebsiteOfYourself: f1,
    },
    {
      name: "Surendra Singh Jayant",
      yearOfGraduation: 2019,
      presentOrganisation: "Hindalco",
      presentLocation: "Hirakud",
      yourLinkedinId: "https://www.linkedin.com/in/ssjayant",
      yourContactInformationEmail: "surendramnnit@hotmail.com",
      yourContactInformationPhoneNumber: 7704874507,
      aPhotoForWebsiteOfYourself: f2,
      testimonialsOrAnythingElseYouWantToSaywillBeDisplayedOnSite:
        "This club is one of the best platform to learn something new & the best part is the implementation of your imagination in it.\nAs humans were always curious to fly like a bird, this platform gives you the wings to pursue that.\nIts also has a great carrier opportunity if we take it further beyond club.\nAs a member of the club, you also get to interact to people with different ideas, which helps to enhance your visualization and thinking abilities.\nBeing part of this club was one of the best phase in my college life.",
      anySuggestionsForClub:
        "Regular mentorship sessions are required to teach flying to our curious juniors.",
    },
    {
      name: "Shrey Dixit",
      yearOfGraduation: 2020,
      yourLinkedinId: "linkedin.com/in/shrey-dixit",
      yourContactInformationEmail: "shreydixit99@gmail.com ",
      aPhotoForWebsiteOfYourself: f3,
      testimonialsOrAnythingElseYouWantToSaywillBeDisplayedOnSite:
        "It was an honour being part of the Aeromodelling Club, MNNIT. I will remember all those priceless moments that I had with my supporting friends, guiding professors, visionary seniors and enthusiastic juniors throughout my college life. The experiences not only made me a better person but also prepared me in unpredictable ways for my career. I wish I had a time machine to re-live all of those memories for eternity. Memories worth being cherished!!",
      anySuggestionsForClub:
        '" Your wings already exist, all you need to do is fly." No matter however bigger challenge this club faces, all of us (the existing members, professors or alumni) will be there to help in turning big dreams into reality. So don\'t hesitate in setting higher targets in the form of projects or various event participation, all of us will support you in achieving them. ',
    },
    {
      name: "Robin John Zachariah",
      yearOfGraduation: 2020,
      presentOrganisation: undefined,
      presentLocation: "Kochi, India",
      yourLinkedinId: "www.linkedin.com/in/robin-john-zachariah",
      yourContactInformationEmail: "robinjohnzachariah@gmail.com",
      yourContactInformationPhoneNumber: 7388342800,
      aPhotoForWebsiteOfYourself: f4,
      anySuggestionsForClub:
        "Great initiative to begin a website. As a suggestion, I would only like to say is try to keep it active and engaging over time. Maybe a blog section or something of that sort.",
    },
    {
      name: "Rahul Thakur",
      yearOfGraduation: 2020,
      presentOrganisation: "Addverb Technologies",
      presentLocation: "Noida",
      yourLinkedinId: "Rahulkrt",
      yourContactInformationEmail: "Rahulkmrthakur24@gmail.com",
      aPhotoForWebsiteOfYourself: f5,
    },
    {
      emailAddress: "maaz.latifee2@gmail.com",
      name: "Mohammed Maaz Latifee",
      yearOfGraduation: 2020,
      presentOrganisation: "Infosys",
      presentLocation: "Abu Dhabi",
      yourLinkedinId: "linkedin.com/in/mohammed-maaz-latifee-0a3375169",
      yourContactInformationEmail: "maaz.latifee2@gmail.com",
      yourContactInformationPhoneNumber: "+91 7753848547",
      aPhotoForWebsiteOfYourself: f6,
      testimonialsOrAnythingElseYouWantToSaywillBeDisplayedOnSite:
        "I remember my 1st day in Aeroclub where I was assigned to start making my first RC Plane. I mostly remember my happy days with club members while working on various projects and models. I am really glad that I have always been taught technical and non technical experiences from Aeroclub seniors. I am glad that I was one of the members of Aeroclub during my final year.",
      anySuggestionsForClub:
        "Suggestion for the club would be that to expand the club and to bring new areas of interests related to Aerospace and Aeronautical. Secondly training to fly the RC Plane and Drones should be on a weekly basis.",
    },
    {
      emailAddress: "vaibhavjha904@gmail.com",
      name: "Vaibhav Kumar Jha",
      yearOfGraduation: 2020,
      presentOrganisation: "Capgemini India",
      presentLocation: "Kharagpur",
      yourContactInformationEmail: "vaibhavjha904@gmail.com",
      yourContactInformationPhoneNumber: 8310731383,
      aPhotoForWebsiteOfYourself: f7,
    },
    {
      emailAddress: "soumyakhanna17997@gmail.com",
      name: "Soumya Khanna",
      yearOfGraduation: 2020,
      presentOrganisation: "Bajaj Auto Limited",
      presentLocation: "Akurdi, Pune",
      yourLinkedinId: "https://www.linkedin.com/in/soumya-khanna-20169040",
      yourContactInformationEmail: "soumyakhanna17997@gmail.com",
      aPhotoForWebsiteOfYourself: f8,
      testimonialsOrAnythingElseYouWantToSaywillBeDisplayedOnSite:
        "The time I spent while working on my project as a part of Aero Club under Kishan sir was a great learning experience for me, and I think it ended up being a pivotal part of my placement. ",
      anySuggestionsForClub: "Teamwork :)",
    },
    {
      emailAddress: "sharmaaman0571@gmail.com",
      name: "Aman sharma",
      yearOfGraduation: 2020,
      presentOrganisation: "Hero motocorp",
      presentLocation: "Gurgaon",
      yourContactInformationEmail: "sharmaaman0571@gmail.com",
      yourContactInformationPhoneNumber: "08218289118",
      aPhotoForWebsiteOfYourself: f9,
    },
    {
      emailAddress: "saritachaudhary2507@gmail.com",
      name: "Sarita Chaudhary",
      yearOfGraduation: 2020,
      presentOrganisation: "Resonance Eduventures Pvt. Ltd.",
      presentLocation: "Kota",
      yourLinkedinId: " https://www.linkedin.com/in/sarita-chaudhary-b92170137/",
      yourContactInformationEmail: "saritachaudhary2507@gmail.com",
      yourContactInformationPhoneNumber: "+919554559909",
      aPhotoForWebsiteOfYourself: f10,
      testimonialsOrAnythingElseYouWantToSaywillBeDisplayedOnSite:
        "The journey begun with Aero Club from the day when i took part in flying challenging event in first year. Learning of aerodynamics, flying practice under guidance of supportive and friendly seniors were nice experiences for me. I'll always cherish all memories from participant to coordinator at Aero Club.",
      anySuggestionsForClub: "1.Integration.\n2.Girls participation.",
    },
    {
      emailAddress: "bhuvanjhamb29@gmail.com",
      name: "Ashwini Kumar",
      yearOfGraduation: 2018,
      aPhotoForWebsiteOfYourself: f11,
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Kishan Tiwari",
      yearOfGraduation: 2019,
      presentOrganisation: "TSAW Drones",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/kishan-tiwari-poseidon/",
      yourContactInformationEmail: "kishan@tsaw.tech",
      yourContactInformationPhoneNumber: 7905461842,
      aPhotoForWebsiteOfYourself: f12,
      testimonialsOrAnythingElseYouWantToSaywillBeDisplayedOnSite:
        "Thanks to the club for everything. Being student president for the session 2018-19, we reimagined the whole way of doing things. We launched around 20+ projects, initiated Prosang, a event to connect club projects to the companies, and I launched my startup TSAW Drones during the event. The time at club, with the members transformed me a lot, taught me to dare things & do it in a completely unique way being fearless.",
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Aniket Tiwari",
      yearOfGraduation: 2019,
      presentOrganisation: "Assistant Manager, Maruti Suzuki",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/kishan-tiwari-poseidon/",
      yourContactInformationEmail: "kishan@tsaw.tech",
      yourContactInformationPhoneNumber: 7905461842,
      aPhotoForWebsiteOfYourself: "",
    },
  ];

  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Our Alumni</div>
        </div>
      </div>
      <div class="container alumni-container mb-5">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                >
                  Batch 2020
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse show">
              <div class="panel-body">
                <div className="container">
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2020 && (
                          <div
                            class="card card-item shadow"
                            style={{ width: "17rem", minHeight: "25rem" }}
                          >
                            <img
                              class="card-img-top card-alumni"
                              src={`${member.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                class="card-title text-center text-uppercase"
                                style={{ minHeight: "4rem" }}
                              >
                                {member.name}
                              </h5>
                              <p
                                class="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {member.presentOrganisation
                                  ? member.presentOrganisation
                                  : "Graduated Mechanical Engineer, MNNIT Allahabad"}
                              </p>

                              <div className="d-flex justify-content-center mt-4">
                                <a href={member.yourLinkedinId} target="_blank">
                                  <i class="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  Batch 2019
                </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse">
              <div class="panel-body">
                <div className="container">
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2019 && (
                          <div
                            class="card card-item shadow"
                            style={{ width: "17rem", minHeight: "25rem" }}
                          >
                            <img
                              class="card-img-top card-alumni"
                              src={`${member.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                class="card-title text-center text-uppercase"
                                style={{ minHeight: "4rem" }}
                              >
                                {member.name}
                              </h5>
                              <p
                                class="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {member.presentOrganisation}
                              </p>
                              <div className="d-flex justify-content-center mt-4">
                                <a href={member.yourLinkedinId} target="_blank">
                                  <i class="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                  ))
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
