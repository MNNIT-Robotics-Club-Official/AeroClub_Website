import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/Gallery.css";

export default function Gallery() {

    const [page, SetPage] = useState(1)
    const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const imgs_per_page = 4
    const no_of_pages = Math.ceil(imgs.length / imgs_per_page)

    return (
        <>
            <Loading time={2} />
            <div className="pagesg">
                <div className="overlayg">
                    <div className="pageTitleg titleBoldg">
                        GALLERY
                            </div>
                </div>
            </div>
            <main className="grid">

                <div className="galery">
                    <div className="grid">
                        {
                            imgs.slice((page - 1) * imgs_per_page, page * imgs_per_page).map(k => (
                                <div className={`item${k}`}>
                                    <img className="gallery-image img" src="https://images.unsplash.com/photo-1610903953576-fc21d18d83d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                                </div>

                            ))
                        }
                    </div>
                </div>
            </main>
            <div className='float-right mr-5 mb-5'>
                {

                    (page > 1) && <Button className='mx-1' onClick={() => {
                        SetPage(page => page - 1)
                    }}>🡨 Previous</Button>

                }
                {
                    (page < no_of_pages) && <Button className='mx-1' onClick={() => {
                        SetPage(page => page + 1)
                    }}>Next 🡪</Button>
                }
            </div>
        </>
    );
}