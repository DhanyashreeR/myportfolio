
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Services.css"

function Services() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t3q11zr', 'template_6kgofwm', form.current, '_XZVDQEFO8ainaCCz')
      .then((result) => {
          console.log(result.text);
          alert("form submitted");
      }, (error) => {
          console.log(error.text);
      });
  };
  return  <div className="footer">
    
    {/* <h2><u>SERVICES:</u></h2>
    <h3>Contact me to make an appointment</h3>
    <p><h2><i><u>Contact details:</u></i></h2>
    <h2>  WhatsApp: 8296259270</h2><h2>Phone: 8861369926</h2>
     <h2>email: dhanyarbaliga@gmail.com</h2> 
    </p> */}
        <h2><u>SERVICES:</u></h2>
    <form ref={form} onSubmit={sendEmail}>
        <table>
          <tr>
            <label>Name:</label>
            <input type="text" name="name" />
          </tr>
          <tr>
            <label>Email:</label>
            <input type="email" name="mail"/>
          </tr>
         
            <tr>
              <label>Phone number</label>
              <input type="text" value="+91" size="3" />
                <input type="text" name=" mobile" size="20" />
            </tr>
         <tr>
          <label>Address</label>
          <textarea name="address" ></textarea>
         </tr>
         <tr>
         
          <td>
            <input type="submit" value="submit" name="submit" />
         
            <input type="reset" value="reset" name="reset"/>
          </td>
         </tr>
        </table>
      </form>


  </div>;
}

export default Services;