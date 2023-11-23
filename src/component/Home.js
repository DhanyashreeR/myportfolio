
import '../css/Body.css';
import Dhanya from "../images/Dhanya.jpg";
import Services from './Services';
import Skills from './Skills';
import Body from './Body';
import Footer from "./Footer";


function Port(){
    return(
        <> 
         <center>
           <h2>PORTFOLIO</h2>
           <div className='img'>
           <img src={Dhanya} alt="Dhanya's picture" height="250px"/>
           </div>
    <h2> <b><u>Dhanyashree R.</u></b> </h2>Student at <i><b>Canara Engineering College </b></i><h3>3<sup>rd</sup> year engineering</h3>
    <h3>Computer Science and Engineering department</h3>
    
    </center>

   <Skills/>
   <Body/>
 
  <Services/>
  
  <Footer />

     </>
    )
    
}
export default Port;