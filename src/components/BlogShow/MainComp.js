import React from 'react'

const MainComp = ({data}) => {
  return (
    <>
      <h1>{data.title}</h1>
      <img src={data.image} style={{aspectRatio:1.2/1}} className="img-fluid rounded"  alt={data.title}/>
      <div className='mt-2' dangerouslySetInnerHTML={{ __html: data.body }} />
    </>
  )
}

export default MainComp;