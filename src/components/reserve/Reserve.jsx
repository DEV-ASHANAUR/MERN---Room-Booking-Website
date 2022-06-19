import React from 'react'
import './reserve.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useContext } from 'react';
import { format } from "date-fns";
import { SearchContext } from '../../context/SearchContext';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Skeleton from '../skeleton/Skeleton';
import { AuthContext } from '../../context/AuthContext';
const Reserve = ({ setOpen, hotelId,hotelName,totalPrice }) => {
    const navigate = useNavigate();
    const [selectedRooms,setSelectedRooms] = useState([]);
    const {data,loading} = useFetch(`/hotels/room/${hotelId}`);
    const {dates} = useContext(SearchContext);
    const {user} = useContext(AuthContext);
    const [rooms,setRooms] = useState([]);
    
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

    //   console.log(alldates);

    //handleSelect
    const handleSelect = (e,roomNumber)=>{
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked ? [...selectedRooms,value]:selectedRooms.filter((item)=>item !== value)
        );
        setRooms(
            checked ? [...rooms,roomNumber]:rooms.filter((item)=>item !== roomNumber)
        )
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
            try {
        
                const res = await axios.post('/reserve',{
                    userId : user._id,
                    userName : user.username,
                    userEmail : user.email,
                    checkIn: format(dates[0].startDate, "MM/dd/yyyy"),
                    checkOut: format(dates[0].endDate, "MM/dd/yyyy"),
                    price: totalPrice,
                    bookedRoom:rooms,
                    hotelId:hotelId,
                    hotelName:hotelName
                })
                console.log(res)
                toast.success("Reservation Complete!");
                setTimeout(()=>{
                    navigate("/");
                },3000)
            } catch (error) {
                toast.error(error);
            }
        } catch (error) {
            toast.error(error);
        }
    }


    return (
        <div className="reserve">
            <ToastContainer />
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
                                                        <input type="checkbox" value={roomNumber._id} onChange={(e)=>handleSelect(e,roomNumber.number)} disabled={isAvailable(roomNumber)} />
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