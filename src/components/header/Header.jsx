import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import React, { useState } from 'react'
import './header.css'
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
const Header = ({ type }) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [destination, setDestination] = useState("dhaka");
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    //handleOption
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation == 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }
    const {dispatch} = useContext(SearchContext);
    // handleSearch
    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH",payload: {destination, options, dates}});

        navigate("/hotels", { state: { destination, options, dates } });
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "container listMode" : "container default"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem ">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem ">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && <>
                    <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                    <p className='headerDesc'>Get rewarded for your travels – unlock instant savings of 10% or
                        more with a free Lamabooking account</p>
                    {!user && <button className='headerBtn'>Sign in / Register</button>}
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input type="text" placeholder="Where are You going?" className="headerSearchInput" onChange={(e) => setDestination(e.target.value)} />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                            <span onClick={() => {
                                if (openOptions) {
                                    setOpenOptions(false);
                                } setOpenDate(!openDate)
                            }} className="headerSearchText">
                                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                                    dates[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}
                            </span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="date"
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="headerSearchItem media">
                            <div className="searchLast">
                                <div className="optionTitle">
                                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                    <span onClick={() => {
                                        if (openDate) {
                                            setOpenDate(false);
                                        } setOpenOptions(!openOptions)
                                    }}>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                                    {openOptions && <div className="options">
                                        <div className="optionItem">
                                            <span className='optionText' style={{ color: "#000" }}>Adult</span>
                                            <div className="optionCounter">
                                                <button disabled={options['adult'] <= 1} onClick={() => handleOption("adult", "d")} className='optionCounterBtn'>-</button>
                                                <span className='optionCounterNumber'>{options['adult']}</span>
                                                <button onClick={() => handleOption("adult", "i")} className='optionCounterBtn'>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className='optionText' style={{ color: "#000" }}>Children</span>
                                            <div className="optionCounter">
                                                <button disabled={options['children'] <= 0} onClick={() => handleOption("children", "d")} className='optionCounterBtn'>-</button>
                                                <span className='optionCounterNumber'>{options['children']}</span>
                                                <button onClick={() => handleOption("children", "i")} className='optionCounterBtn'>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className='optionText' style={{ color: "#000" }}>Room</span>
                                            <div className="optionCounter">
                                                <button disabled={options['room'] <= 1} onClick={() => handleOption("room", "d")} className='optionCounterBtn'>-</button>
                                                <span className='optionCounterNumber'>{options['room']}</span>
                                                <button onClick={() => handleOption("room", "i")} className='optionCounterBtn'>+</button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="searchBtn">
                                    <button className='sBtn' onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div></>}
            </div>
        </div>
    )
}

export default Header