import React from 'react'

const BlogCard = ({blog}) => {
    return (
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={blog.image} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{blog.title}</h5>
                        <p class="card-text" dangerouslySetInnerHTML={{ __html: blog.body.substr(0 , 160) + "..." }}/>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;