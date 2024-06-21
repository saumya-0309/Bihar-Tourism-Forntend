import React from 'react'
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useUser } from '../hooks/user';
import AllblogComp from '../components/AllBlog/AllblogComp';

const AdminBlog = () => {
  const { user } = useUser();
  return (
    <div className="container-scroller">
      <Navbar user={user}/>
      <div class="container-fluid page-body-wrapper">
        <Sidebar/>
        <AllblogComp/>
      </div>
    </div>
  )
}

export default AdminBlog;