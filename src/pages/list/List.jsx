import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './list.css'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../../components/searchItem/SearchItem'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
const List = () => {
  const location = useLocation();
  // console.log(location.state);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container mt-3">
        <div className="row m-auto">
          <div className="col-md-3 mb-3">
            <div className='search_container'>
              <h2 className='searchTitle'>Search</h2>
              <div className="searchItem">
                <label className='text-white my-2' style={{ fontWeight: 700 }}>Destination</label>
                <input type="text" className='destInput' placeholder={destination} />
              </div>
              <div className="searchItem dateParent">
                <label className='checkin_title my-2'>Check in And Check out date</label>
                <span className='dateArea' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && <DateRange
                  onChange={item => setDate([item.selection])}
                  ranges={date}
                  className="dateR"
                  minDate={new Date()}
                />}
              </div>
              <div className="searchItem">
                <label className='checkin_title my-2'>options</label>
                <div className="optionArea">
                  <div className="optionItem">
                    <span>Min Price <small>Per Night</small></span>
                    <input min="1" type="number" placeholder="Min Price" />
                  </div>
                  <div className="optionItem">
                    <span>Max Price <small>Per Night</small></span>
                    <input min="1" type="number" placeholder="Max price" />
                  </div>
                  <div className="optionItem">
                    <span>Adult</span>
                    <input min="1" type="number" placeholder={options.adult} />
                  </div>
                  <div className="optionItem">
                    <span>Children</span>
                    <input min="0" type="number" placeholder={options.children} />
                  </div>
                  <div className="optionItem">
                    <span>Room</span>
                    <input min="1" type="number" placeholder={options.room} />
                  </div>
                </div>
              </div>
              <button className='sBtn w-100 rounded'>Search</button>
            </div>
          </div>
          <div className="col-md-9">
              <SearchItem />
              <SearchItem />
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default List