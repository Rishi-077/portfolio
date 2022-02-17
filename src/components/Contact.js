import React,{useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import { Form } from 'react-bootstrap';
import {CgComment,MdMessage} from "react-icons/md";

function Contact ()
{  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( 'service_vhwn10j', 'template_yl9jmsp',
      form.current, 'user_99q7DVqiRkHk9AlrAmpyc' )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      } );
    form.current.reset();
    alert('Email sent successfully (:')
  };
  return ( 
    <div className="container-fluid" id='Contact'>
      <section className="contact-section">
        <h6 className="contact-h6">Contact Details</h6>
        <p className="contact-p">Rishikesan</p>
        <p className="contact-p">Muthunagar, Ar quatres</p>
        <p className="contact-p">Sivagangai, Tamilnadu 630561</p>
        <p className="contact-p">+91 9361087223</p>
        <p className="contact-p">rishikesan070@gamil.com</p>
      </section>

      
      <Form ref={form} onSubmit={sendEmail} className="form-header">

        <Form.Group className="mb-3 form-name">
          <div className="contact-icon">
            <MdMessage />
          </div>
          
          <Form.Label>Name </Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter your name"/>
        </Form.Group>
        <Form.Group className="mb-3 form-name">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" name="user_email" placeholder='Enter your email' />
        </Form.Group>
        <Form.Group className="mb-3 form-name">
          <Form.Label>Message </Form.Label>
          <Form.Control as='textarea' name="message" placeholder='Enter your message'/>
        </Form.Group>
        <button type="submit" value="Send" className='form-button'>send</button>
    </Form>
    </div>
   );
}

export default Contact;