
import "../css/Body.css";
import web from "../images/web.jpg";
export default function About() {
  return (
    <>
   <center><h2><u>ABOUT:</u></h2></center> 
  
      <div className="about">
       
          <img src={web} className="abtpic"/>
     
        <div className="abt">
        <p >
          Hello! I'm Dhanyashree R, a dedicated web developer,with a deep rooted
          passion for coding. My expertise spans across a range of
          technologies,including HTML, CSS, Javascript,and more. Whether it's
          crafting responsive and mobile friendly websites,optimizing
          performance, or diving into the world of web development throws my
          way. In additon, to my technical skills, I'm a firm believer in the
          importance of effective communication and collaborstion. Building
          strong relationships with clients, designers, fellow developers is the
          key for delivering successful projects.
        </p>
        </div>
      </div>
    
    </>
  );
}
