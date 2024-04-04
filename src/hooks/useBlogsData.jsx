import { useEffect, useState } from 'react'

export default function useBlogsData(url,option={}) {
    const [blogs , setBlogs] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const fetchData = async ()=>{
            try {
                let res = await fetch(url,option)
                if(!res.ok){
                    throw new Error("Failed to fetch data")
                }
                let data = await res.json()
                setBlogs(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])


  return { blogs , loading , error };
}
