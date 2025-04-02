import React, { useEffect,useState } from "react";
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data = useLoaderData()
    //const [data,setData] = useState([])
    // useEffect (() =>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
    return(
        <div className="bg-gray-600 m-4 text-center text-3xl text-white p-4">Github followers: {data.followers} 
        <img scr={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}