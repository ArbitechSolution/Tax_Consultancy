import React, { Component } from "react";
import Slider from "react-slick";
import "./Homestyle.css"
export default class Home extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container">

                <Slider {...settings}>
                    <div className="">
                        <img src="1.webp" width="300px" alt="" />
                    </div>
                    <div className="">
                        <img src="1..webp" width="300px" alt="" />
                    </div>
                    <div>
                        <img src="2.webp" width="300px" alt="" />
                    </div>
                    <div>
                        <img src="3.webp" width="300px" alt="" />
                    </div>
                    <div>
                        <img src="4.webp" width="300px" alt="" />
                    </div>
                    <div>
                        <img src="5.webp" width="300px" alt="" />
                    </div>
                    <div>
                        <img src="6.webp" width="300px" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}