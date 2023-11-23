import Body from "./Body";
import "../css/Skills.css";
import html from "../images/html.jpg";
 import css from "../images/css.jpg";
import javascript from "../images/javascript.jpg";
import Card from "./Card";

export default function Skills() {
  const SkillsP=[
{
  id:1,
  h:"",
  p1:html
  
},
{
  id:2,
  h:"",
  p1:css
},
{
  id:3,
  h:"",
  p1:javascript
}

  ];
  return (
    <>
    <h2><u>SKILLS:</u></h2>
    <div className="skills">
    {
    SkillsP.map((item)=>(
      <Card skill={item}/>
   ) )
   }

</div>
     </>
    
  );
}
