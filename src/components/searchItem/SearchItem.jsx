import React from 'react'
import { Link } from 'react-router-dom';
import './searchItem.css';
const SearchItem = ({item}) => {
    return (
        <div className="row searchItemResult">
            <div className="col-md-3 p-0">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                    alt=""
                    className="img-fluid img-thumbnail"
                />
            </div>
            <div className="col-md-6 siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="col-md-3 siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchItem