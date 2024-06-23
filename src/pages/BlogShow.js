import React from 'react'
import ResponsiveAppBar from '../components/Common/Navbar';
import { useUser } from '../hooks/user';
import { useParams } from 'react-router-dom';
import { useGetBlogBySlug } from '../hooks/blogs';

const BlogShow = () => {
    const {user} = useUser();
    const {slug} = useParams();
    const {blog , isLoading} = useGetBlogBySlug({slug});
    console.log(blog , isLoading);
    return (
      <>
          <ResponsiveAppBar user={user}/>
      </>
    )
}

export default BlogShow;
