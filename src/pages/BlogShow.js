import React from 'react'
import ResponsiveAppBar from '../components/Common/Navbar';
import { useUser } from '../hooks/user';
import { useParams } from 'react-router-dom';
import { useGetBlogBySlug } from '../hooks/blogs';
import MainComp from '../components/BlogShow/MainComp';
import SideComp from '../components/BlogShow/SideComp';

const BlogShow = () => {
  const { user } = useUser();
  const { slug } = useParams();
  const { blog, isLoading } = useGetBlogBySlug({ slug });
  return (
    <>
      <ResponsiveAppBar user={user} />
      <div class="container">
        <div class="row">
          <div class="col col-lg-9 col-md-8 col-12 m-2">
            {!isLoading && Boolean(blog.data) && <MainComp data={blog.data} />}
          </div>
          <div class="col m-2">
          {!isLoading && Boolean(blog.data) && <SideComp data={blog.data} />}
          </div>
        </div>
        {!isLoading && !Boolean(blog.data) && <h1 className='mt-2'>Blog not added yet</h1>}
      </div>
    </>
  )
}

export default BlogShow;
