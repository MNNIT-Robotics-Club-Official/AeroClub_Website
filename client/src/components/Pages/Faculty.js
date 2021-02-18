import React from 'react'
import Loading from '../../Animations/Loading'
import '../../css/Alumni.css'

export default function Faculty() {
    return (
        <>
            <Loading />
            <div className=" pagesa">
                <div className="overlaya">
                    <div className="pageTitlea titleBolda">
                        Faculty
                    </div>
                </div>
            </div>

            <main className="grid">
                <div className="galery">
                    <div className="grid ">
                        {
                            [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 7,].map((i, e) => (
                                <div className={`item${e + 1}`}>
                                    <a className="caption" data-title="Colored landscape"
                                        data-name="Name - Bhuvan Jhumb"
                                        data-desc="UNDERGRADUATE ECE, INTERN AT RISS, CMU"
                                        data-linkedin="dfgfd"
                                    >
                                        <img className="gallery-image img" src="https://images.unsplash.com/photo-1610903953576-fc21d18d83d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="coordinator" />uyguygyugfyu</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>

        </>
    )
}
