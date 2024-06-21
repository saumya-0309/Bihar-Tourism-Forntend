import React from 'react'
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useUser } from '../hooks/user';
import AddBlogComp from '../components/AddBlogs/AddBlogComp';

const AddBlog = () => {
  const { user } = useUser();
  return (
    <div className="container-scroller">
      <Navbar user={user}/>
      <div class="container-fluid page-body-wrapper">
        <Sidebar/>
        <AddBlogComp/>
      </div>
    </div>
  )
}

export default AddBlog;