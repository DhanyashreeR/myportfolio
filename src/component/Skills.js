import Body from "./Body";
import "../css/Skills.css";
export default function Skills() {
  return (
    <>
      <h2>
        <u>SKILLS:</u>
      </h2>
      <center>
        <div className="box">
          <div className="div1">
            <h3>
              <ul>
                {" "}
                <h1>Web development:</h1>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </h3>
          </div>
          <div className="div2">
            <h3>
              <ul>
                {" "}
                <h1>Others:</h1>
                <li>C programming</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </h3>
          </div>
        </div>
      </center>
    </>
  );
}
