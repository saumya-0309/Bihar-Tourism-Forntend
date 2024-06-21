import React from 'react'
import ResponsiveAppBar from '../components/Common/Navbar';
import { useUser } from '../hooks/user';

const BlogPage = () => {
    const {user} = useUser();
    return (
      <>
          <ResponsiveAppBar user={user}/>
      </>
    )
}

export default BlogPage;
