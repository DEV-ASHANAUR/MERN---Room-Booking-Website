import React from 'react'
import './dashboard.css';
import { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import useFetch from '../../hooks/useFetch';
import Navbar from '../../components/navbar/Navbar'
import { AuthContext } from '../../context/AuthContext'
import Skeleton from '../../components/skeleton/Skeleton';
const img = 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=395';
const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { data, loading } = useFetch(`/reserve/user/${user._id}`);
    console.log("orders", data);
    return (
        <div>
            <Navbar />
            <Header type="list" />


            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="profile_conatiner">
                            <div className="img">
                                <img src={img} className="img-fluid img-thumbnail" alt="profile" />
                            </div>
                            <div className="info mt-3">
                                <h2>{user.username}</h2>
                                <h2 className='text-lowercase'>{user.email}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 mb-4">
                        <div className="reservation">
                            <h2 className='text-uppercase'>
                                all reservation
                            </h2>
                            <div className="table-responsive">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Hotel Name</th>
                                            <th>Room Numbers</th>
                                            <th>CheckIn</th>
                                            <th>CheckOut</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (loading) ? (
                                                <Skeleton type="table" />
                                            ) :
                                                (
                                                    <>
                                                        {
                                                            data.length ? (
                                                                data.map((item) => (
                                                                    <tr key={item._id}>
                                                                        <td>{item.hotelName}</td>
                                                                        <td>
                                                                            {
                                                                                item.bookedRoom.map((room) => (
                                                                                    <span className='badge rounded-pill bg-primary mx-1'>{room}</span>
                                                                                ))
                                                                            }

                                                                        </td>
                                                                        <td>{item.checkIn}</td>
                                                                        <td>{item.checkOut}</td>
                                                                        <td>{item.price}$</td>
                                                                    </tr>
                                                                ))
                                                            ) :
                                                                (
                                                                    <div className="text-center">
                                                                        <h2>No Reservation Yet!</h2>
                                                                    </div>
                                                                )
                                                        }
                                                    </>
                                                )
                                        }
                                       

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <MailList />
            <Footer />
        </div>
    )
}

export default Dashboard