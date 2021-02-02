import { useHistory, useParams, Link } from 'react-router-dom'
import * as FaICONS from 'react-icons/fa';
import useFetch from './useFetch'

const BlogDetails = () => {

      const {id} = useParams()

      const {data, isloading, isError} = useFetch(`http://localhost:8000/blogs/${id}`)

      const history = useHistory()

        const handleDelete = ()=>{

            fetch("http://localhost:8000/blogs/" + data.id,{
                    method: 'DELETE'
            })
            .then(()=>{

                history.push("/")
            })

        } 

       


    return (
        <div className="blog-details">
            
            {
                isloading && <div>Loading....</div>
            }

            {
                isError &&  <div>{isError}</div>
            }

            {
                data && (
                    <>
                       <li className="nav-text">
                            <Link to="/">
                                <FaICONS.FaHome/>
                                <span>Home</span>
                            </Link>

                      </li>

                       <article>
                           <h2>{data.title}</h2>
                            <p>Written by - {data.author}</p>
                            <div className="blog-body">{data.body}</div>
                            <button className="delete-btn" onClick={handleDelete}>Delete</button>
                           
                       </article> 
                    </>
                )   
            }





        </div>
    )
}

export default BlogDetails
