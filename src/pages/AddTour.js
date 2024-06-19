import React from 'react'
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useUser } from '../hooks/user';
import AddTourComp from '../components/AddTour/AddTourComp';

const AddTour = () => {
  const { user } = useUser();
  return (
    <div className="container-scroller">
      <Navbar user={user}/>
      <div class="container-fluid page-body-wrapper">
        <Sidebar/>
        <AddTourComp/>
      </div>
    </div>
  )
}

export default AddTour;