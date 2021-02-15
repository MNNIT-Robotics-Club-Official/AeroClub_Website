import React from 'react'
import '../../css/About.css'

export default function About() {
    return (
        <div className='about-us d-flex flex-column justify-content-center align-items-center'>
            <div className="content-heading">
                <h2 className='font-weight-bold'>ABOUT US</h2><br />
            </div>
            <div className="content d-flex">
                <p className='main-content'>
                    AeroClub MNNIT, established in 2018, is a student body congregating students from various branches of our college.
                    Here we work across all the domains in the aerospace sector ranging from RC planes to design, from aerodynamic analysis to autonomous drones, and then to astronomy. Equipped with all the obligatory facilities, we have completed 50+ projects, participated and won accolades in multiple national level events. Our club has also been the birthplace of a startup: TSAW, in the drone sector, which is gaining ground in the field and as a company.
                    We are closely working with the industries and are well-versed in Aerospace technology with our members regularly acquiring jobs with lucrative packages in tech giants, internships in IITs, research labs and organisations like ISRO, TATA Aerospace and various tech companies.
                    We have 3+ years of experience in the robotics and aerospace sector, carried out and mentored many projects and are excited to help you propel your journey into the world of aerospace.
                </p>
                <div className="img col-4 d-flex align-items-center">
                    <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    )
}
