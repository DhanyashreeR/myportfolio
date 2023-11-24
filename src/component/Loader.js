import ld from "../images/loader.jpg";

import "../css/Loader.css";
function Loader(){
    return(
        <div>
       <div className="load">
        <img src={ld}/>
       </div>
        
        </div>
    )

}
export default Loader;