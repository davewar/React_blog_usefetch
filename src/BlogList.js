import React from 'react'
import { Link } from 'react-router-dom'


const BlogList = ({blogs,title}) => {

       

    // console.log(blogs);
    return (
        <div className="blog-list">
                <h3>{title}</h3>
                 {
                  blogs.map((item)=>(
                        <div  key={item.id} className="blog-preview">
                                
                                <Link to={`/blogs/${item.id}`}>
                                    <h2>{item.title}</h2>
                                    <p>Written by - {item.author}</p>
                                   
                                </Link>

                        </div>

                  )                   
                  )      
                }
                
        </div>
    )
}

export default BlogList
