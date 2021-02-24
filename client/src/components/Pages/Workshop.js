import React, { useEffect, useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import "../../css/Event.css";
import { baseTitle } from "../../baseUtils";
import { baseURL } from "../../baseUtils";

export default function Workshop() {
    const [workshops, SetWorkshops] = useState([]);

    useEffect(() => {
        fetch("/api/workshop", {
            method: "get",
        })
            .then((res) => res.json())
            .then((data) => SetWorkshops(data));
    }, []);

    useEffect(() => {
        fetch('/api/workshop', {
            method: 'get'
        }).then(res => res.json())
            .then(data => SetWorkshops(data))
    }, [])

    return (
        <section className="section1 pagese ">
                <div className="overlaye">
                    <div className="containere ">
                        <h1 className="titlee"><div className="pageTitlee titleBolde">
                            {/* <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div> */}
                        Jigyasa

                            {/* </div> */}

                        </div></h1>
                        <div className="content-wrapper">
                            <div className="img-wrapper">
                                <div className="img imgev" ><img src={`${baseURL}/images/utils/jigyasa.png`} alt="prosang" srcset="" style={{ alignItems: 'center' }} /></div>
                            </div>
                            <div className="text-wrapper">
                                <p className="texte">Jigyasa is the workshop venture of the Technical clubs of MNNIT, namely Robotics, Astrowing and AeroClub, motivated by the desire to supplement education with the present day industry requirements, thus making the participants future ready with a STEM mindset.



                </p>
                                <p className="texte">The workshops under Jigyasa will help the students in acknowledging real-life applications of science/engineering, through various projects, activities and interactive sessions. 
Hence, by emphasizing on innovation and imagination, this workshop will incite in their minds, a profound technical temperament and fascination towards STEM.
                </p>
                            

                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
