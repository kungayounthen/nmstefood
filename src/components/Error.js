import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const Error=()=>{
    let err=useRouteError();
    
    return<div><h1>Ooops!!! <br/> Something went Wrong <br/><br/><br/><br/> {JSON.stringify(err)}
    <div> 
                <button  style={{fontSize:"200px", marginTop:"150px",marginLeft:"700px"}}> 
            <Link style={{ textDecoration: 'none', color: 'inherit' }}to="/"> HOME </Link>
             </button> </div></h1></div>;
}
export default Error;