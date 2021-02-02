import {useState,useEffect} from 'react'

const useFetch = (url) => {

        const [data,setData] = useState([])
        const [isloading,setLoading] = useState(true)
        const [isError,setError] = useState(null)

            useEffect(()=>{
                        // when home page runs and uses the fetch request, if user switches to a different page before fetch completed then we need to stop fetch and not update state on an unmounted component
                const abortContro = new AbortController()
                
                            // set timeout used to stimulate a delay in getting data back from server.
                    setTimeout(()=>{
                        fetch(url,{
                            signal: abortContro.signal
                        })
                            .then(res =>{
                                
                                if(!res.ok){
                                    throw Error ("Issue with trying to get data")   
                                }
                                return res.json()
                            })
                            .then((data)=>{
                                setData(data)
                                setLoading(false) 
                                setError(null)  
                            })
                            .catch(err=>{
                                // console.log(err.message);

                                //if aborted then dont update state.
                                if(err.name ==="AbortError"){
                                    // console.log("fetch aborted");
                                } else{
                                     setError(err.message)
                                    setLoading(false)     

                                }
                                    
                            })

                    },1000)

                            return ()=> abortContro.abort()

                    },[url])

                            
                    return {
                        data,
                        isloading,
                        isError
                    }

                   

}

export default useFetch
