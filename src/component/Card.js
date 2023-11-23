
export default function Card ({skill})
{

return(<>
<div className="card">
<h>{skill.h}</h>
<p1>{}</p1>
<img src={skill.p1}/>
</div>
</>
)

}