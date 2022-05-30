import React from 'react'
import { useNavigate , useParams} from "react-router-dom";
const Home = () => {

  //useHistory replaced by useNavigate
  let navigate = useNavigate();

  //get params
  let params = useParams();

  //Query Params ?????


    return (
        <div className="App">
          <h2>Home</h2>  
        </div>
    )
}

export default Home
