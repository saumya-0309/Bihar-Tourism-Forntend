import React from 'react'
import { useGetBlog } from '../../hooks/blogs';
import BlogCard from './BlogCard';

const ShowAllBlog = () => {
    const {blogs, isLoading} = useGetBlog();
    console.log(blogs , isLoading);
  return (
    <div>
        {
            !isLoading && blogs.data.map((blog) => {
                return (
                    <BlogCard blog={blog} />
                )
            })
        }
    </div>
  )
}

export default ShowAllBlog;