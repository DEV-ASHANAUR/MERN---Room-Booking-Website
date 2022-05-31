import React from 'react'
import './featuredPropertise.css';
import Slider from "react-slick";
const FeaturedPropertise = () => {
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
                <div className='FeatutedProContainer'>
                    <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt=".." className='feproImg' />
                    <div className="fepListTitles">
                        <p>Pateo Santo Estevao-Self</p>
                        <h3>Starting From BDT 38,396</h3>
                        <div className='feRating'>
                            <button className='rating'>9.3</button>
                            <h3 className='complement'>Wonderfull</h3>
                            <span>1254 reviews</span>
                        </div>
                    </div>
                </div>
                <div className='FeatutedProContainer'>
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt=".." className='feproImg' />
                    <div className="fepListTitles">
                        <p>Pateo Santo Estevao-Self</p>
                        <h3>Starting From BDT 38,396</h3>
                        <div className='feRating'>
                            <button className='rating'>9.3</button>
                            <h3 className='complement'>Wonderfull</h3>
                            <span>1254 reviews</span>
                        </div>
                    </div>
                </div>
                <div className='FeatutedProContainer'>
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt=".." className='feproImg' />
                    <div className="fepListTitles">
                        <p>Pateo Santo Estevao-Self</p>
                        <h3>Starting From BDT 38,396</h3>
                        <div className='feRating'>
                            <button className='rating'>9.3</button>
                            <h3 className='complement'>Wonderfull</h3>
                            <span>1254 reviews</span>
                        </div>
                    </div>
                </div>
                <div className='FeatutedProContainer'>
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt=".." className='feproImg' />
                    <div className="fepListTitles">
                        <p>Pateo Santo Estevao-Self</p>
                        <h3>Starting From BDT 38,396</h3>
                        <div className='feRating'>
                            <button className='rating'>9.3</button>
                            <h3 className='complement'>Wonderfull</h3>
                            <span>1254 reviews</span>
                        </div>
                    </div>
                </div>
                <div className='FeatutedProContainer'>
                    <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt=".." className='feproImg' />
                    <div className="fepListTitles">
                        <p>Pateo Santo Estevao-Self</p>
                        <h3>Starting From BDT 38,396</h3>
                        <div className='feRating'>
                            <button className='rating'>9.3</button>
                            <h3 className='complement'>Wonderfull</h3>
                            <span>1254 reviews</span>
                        </div>
                    </div>
                </div>
                <div className='FeatutedProContainer'>
                    <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt=".." className='feproImg' />
                    <div className="fepListTitles">
                        <p>Pateo Santo Estevao-Self</p>
                        <h3>Starting From BDT 38,396</h3>
                        <div className='feRating'>
                            <button className='rating'>9.3</button>
                            <h3 className='complement'>Wonderfull</h3>
                            <span>1254 reviews</span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default FeaturedPropertise