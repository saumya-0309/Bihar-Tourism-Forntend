import React from 'react'
import DashboardComp from '../components/Dashobard/DashboardComp';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useUser } from '../hooks/user';

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="container-scroller">
      <Navbar user={user}/>
      <div className="container-fluid page-body-wrapper">
        <Sidebar/>
        <DashboardComp/>
      </div>
    </div>
  )
}

export default Dashboard;