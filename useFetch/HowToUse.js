import React from 'react'
import {useFetch} from './useFetch';

 const HowToUse = () => {

    //get data
    const {data:data,ispending,error}=useFetch("http://localhost:3000/mobiles")

    //post data
    const {postData,data,error}=useFetch("http://localhost:3000/mobiles","POST")
    postData({name:"imtiaz"})

    //get single entry using params
    const model=useParams();
    const url = "http://localhost:3000/mobiles/"+model.id
    const {data:data,ispending,error}=useFetch(url)
    
     return (
         <div>
             
         </div>
     )
 }
 
 export default HowToUse
 