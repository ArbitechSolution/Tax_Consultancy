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
            <div className="container marginTop">

                <Slider {...settings}>
                    <div>
                        <div className="slider_img1">
                            <p className=" text-color1">Paying tax is not a punishment  It’s a responsibility</p>
                        </div>
                    </div>
                    <div>
                        <div className="slider_img2">
                            <p className=" text-color2">	Knowledge, Experience & Trust</p>
                        </div>
                    </div>
                    <div>
                        <div className="slider_img3">
                            <p className="text-color2">Practical Approach |Educating the nation</p>
                        </div>
                    </div>


                    <div className="slider_img4">
                        <img src="4.webp" width="300px" height="250px" alt="" />
                    </div>
                    <div className="slider_img5">
                        <img src="5.webp" width="300px" height="250px" alt="" />
                    </div>
                    <div className="slider_img6">
                        <img src="6.webp" width="300px" height="250px" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}