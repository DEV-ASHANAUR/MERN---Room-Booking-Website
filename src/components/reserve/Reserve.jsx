import React from 'react'
import './reserve.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';
import Skeleton from '../skeleton/Skeleton';
const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRooms,setSelectedRooms] = useState([]);
    const {data,loading} = useFetch(`/hotels/room/${hotelId}`);
    const {dates} = useContext(SearchContext);
    
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        const date = new Date(start.getTime());
    
        const dates = [];
    
        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }
    
        return dates;
      };
    
      const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

      console.log(alldates);

    //handleSelect
    const handleSelect = (e)=>{
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked ? [...selectedRooms,value]:selectedRooms.filter((item)=>item !== value)
        );
    }
    //isAvailable
    const isAvailable = (roomNumber)=>{
        const isFound = roomNumber.unavailableDates.some((date)=> alldates.includes(new Date(date).getTime()));
        return isFound;
    }

    //handleClick
    const handleClick = async () =>{
        try {
            await Promise.all(
                selectedRooms.map((roomId)=>{
                    const res = axios.put(`/rooms/availability/${roomId}`,{
                        dates:alldates
                    });
                    return res.data;
                })
            )
        } catch (error) {
            
        }
    }


    return (
        <div className="reserve">
            <div className='modal_container'>
                <FontAwesomeIcon icon={faCircleXmark}
                    className="rClose" onClick={() => setOpen(false)} />
                <span>Select Your Room:</span>
                
                {
                    (loading)?(
                        <Skeleton type="reserve" />
                      ):
                      (
                        <>
                            {
                                 data.map((item)=>(
                                    <div className="rItem" key={item._id}>
                                        <div className="rItemInfo">
                                            <div className="rTitle">{item.title}</div>
                                            <div className="rdesc">{item.desc}</div>
                                            <div className="rMa">Max People: {item.maxPeople}</div>
                                            <div className="rPrice">Price:{item.price}$</div>
                                        </div>
                                        <div className="rselectedRooms">
                                            {
                                                item.roomNumbers.map((roomNumber)=>(
                                                    <div className="room" key={roomNumber._id}>
                                                        <label htmlFor="">{roomNumber.number}</label>
                                                        <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={isAvailable(roomNumber)} />
                                                    </div>
                                                ))
                                            }
                                            
                                        </div>
                                    </div>
                                    
                                ))
                            }
                        </>
                      )
                    
                }
                <button onClick={handleClick} className="rButton">Reserve Now</button>
            </div>
        </div>
    )
}

export default Reserve