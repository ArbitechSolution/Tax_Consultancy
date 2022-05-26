import React from 'react';
import './Homestyle.css'
import ReactWhatsapp from 'react-whatsapp';



export default function Home() {
    return <div>


        <div className="" >

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item  active" data-bs-interval="1000">
                        <img src="1..webp" className="d-block w-100 slider_img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="2.webp" className="d-block w-100 slider_img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="3.webp" className="d-block w-100 slider_img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="4.webp" className="d-block w-100 slider_img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="5.webp" className="d-block w-100 slider_img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="6.webp" className="d-block w-100 slider_img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    </div>;
}
