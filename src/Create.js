import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


const Create = () => {

        const [title,setTitle] = useState("")
        const [body,setBody] = useState("")
        const [author,setAuthor] = useState("")

        const [isloading,setLoading] = useState(false)
        const history = useHistory()

        const handleSubmit = (e) =>{
                e.preventDefault()

                const newBlog = {
                    title, body, author
                }

                setLoading(true)

                fetch("http://localhost:8000/blogs",{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newBlog)
                })
                .then(()=>{

                    setLoading(false)
                    console.log('done');
                    // history.go(-1)
                    //redirect
                    history.push("/")

                })

                

        }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>

                <label>Blog Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                
                /> 

                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >                    
                </textarea>   
                
                <label>Blog author:</label>
                <input type="text"
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                /> 

                   

                {
                    !isloading && <button>Add blog</button>
                }

                {
                    isloading && <div>Loading .....</div>
                }
                
                
                

            </form>


        </div>
    )
}

export default Create
