import React from 'react'
import './featuredPropertise.css';
import Slider from "react-slick";
import useFetch from '../../hooks/useFetch';
const FeaturedPropertise = () => {
    const { data, loading } = useFetch("/hotels?featured=true&limit=4");
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        <div className='mb-5'>
            <Slider {...settings}>
                {
                    data.map((item, i) => (
                        <div className='FeatutedProContainer' key={item._id}>
                            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt=".." className='feproImg' />
                            <div className="fepListTitles">
                                <p>{item.name} {item.city}</p>
                                <h3>Starting From {item.cheapestPrice}$</h3>
                                {
                                    item.rating && (
                                        <div className='feRating'>
                                            <button className='rating'>{item.rating}</button>
                                            <h3 className='complement'>Wonderfull</h3>
                                            <span>1254 reviews</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default FeaturedPropertise