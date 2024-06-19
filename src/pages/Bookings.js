import React from 'react'
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useUser } from '../hooks/user';
import BookingComp from '../components/Bookings/BookingComp';

const Bookings = () => {
  const { user } = useUser();
  return (
    <div className="container-scroller">
      <Navbar user={user}/>
      <div class="container-fluid page-body-wrapper">
        <Sidebar/>
        <BookingComp/>
      </div>
    </div>
  )
}

export default Bookings;