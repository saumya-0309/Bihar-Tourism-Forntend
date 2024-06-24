import React from 'react'
import { UseSuggestBlog } from '../../hooks/blogs';
import SideCompCard from './SideCompCard';

const SideComp = ({data}) => {
  const {blogs , isLoading} = UseSuggestBlog({city:data.city , religion:data.religion , id:data.id});
  console.log(blogs , isLoading);
  return (
    <>
      <h2>More Places</h2>
      {!isLoading && blogs.data.map((blog) => {
        return <SideCompCard data={blog}/>
      })}
    </>
  )
}

export default SideComp;