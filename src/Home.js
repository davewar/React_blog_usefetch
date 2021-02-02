import BlogList from './BlogList'
import useFetch from './useFetch'



const Home = () => {

       const {data, isloading, isError} = useFetch("http://localhost:8000/blogs")
        // console.log("D",data,"L",isloading,"E",isError);
               

    return (
        <div className="home">
            {
                isloading && <div>Loading....</div>
            }
            {
                isError &&  <div>{isError}</div>
            }
            {
                data && <BlogList blogs={data} title="All blogs!" />
            }
            

               
            
        </div>
    )
}

export default Home
