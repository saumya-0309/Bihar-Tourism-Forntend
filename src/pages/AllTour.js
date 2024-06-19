import React from 'react'
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useUser } from '../hooks/user';
import AllTourComp from '../components/AllTour/AllTourComp';

const AllTour = () => {
  const { user } = useUser();
  return (
    <div className="container-scroller">
      <Navbar user={user}/>
      <div class="container-fluid page-body-wrapper">
        <Sidebar/>
        <AllTourComp/>
      </div>
    </div>
  )
}

export default AllTour;