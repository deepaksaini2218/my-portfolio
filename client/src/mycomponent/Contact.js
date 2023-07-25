import React, { useState ,useRef } from 'react';
import './Contact.css'
import { BsFacebook,BsSkype,BsLinkedin,BsTelephonePlus,BsFillEnvelopeFill} from 'react-icons/bs';
import { TbMapPin} from 'react-icons/tb';
import { BiTimeFive} from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Contact(props) {
    

    const showAlert = async (e) => {
        Swal.fire({
            title: "Danger",
            text: "17 ka khatra",
            icon: "error",
            confirmButtonText: "OK",
          });
    }
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message ,subject } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      subject: subject.value,
    };
    let response = await fetch("http://localhost:5005/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    // Swal.fire({
    //   title: "Danger",
    //   text: "17 ka khatra",
    //   icon: "error",
    //   confirmButtonText: "OK",
    // });
    alert(result.status);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6tdydkq', 'template_3bzqyms', form.current, 'TRuhiRUAcuzdaHkHc')
      .then((result) => {
          console.log(result.text);
          alert("send sucessfully")
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div>
      

    <section id="contact" class="contact section-bg">

      <div class="container">
        <div class="section-title">
          <h2>Contact Us</h2>
          <p>Have questions or need support? Get in touch with us via our website's contact form. We're here to assist you and provide prompt solutions. Reach out to us today and let's start a conversation. Your satisfaction is our top priority.</p>
        </div>
      </div>

      <div class="container-fluid cf" >

        <div class="row">

          <div class="col-lg-6 d-flex align-items-stretch infos">

            <div class="row">

              <div class="col-lg-6 info d-flex flex-column align-items-stretch">
                <i class="bx bx-map"><TbMapPin/></i>
                <h4>Address</h4>
                <p>Shiv nagar <br></br>Rewari(Haryana) 123401</p>
              </div>
              <div class="col-lg-6 info info-bg d-flex flex-column align-items-stretch">
                <i class="bx bx-phone"><BsTelephonePlus/></i>
                <h4>Call </h4>
                <p>+91 8685068567<br></br>+91 7015167992</p>
              </div>
              <div class="col-lg-6 info info-bg d-flex flex-column align-items-stretch">
                <i class="bx bx-envelope"><BsFillEnvelopeFill/></i>
                <h4>Email Us</h4>
                <p>sainimonti17@gmail.com<br></br>deepak2117saini@gmail</p>
              </div>
              <div class="col-lg-6 info d-flex flex-column align-items-stretch">
                <i class="bx bx-time-five"><BiTimeFive/></i>
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9AM to 5PM<br></br></p>
              </div>
            </div>

          </div>

          <div class="col-lg-6 d-flex align-items-stretch contact-form-wrap">
            <form ref={form}  onSubmit={sendEmail} class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="email">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <label for="message">Message</label>
                <textarea class="form-control" name="message" rows="8" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit" >Submit</button></div>
            </form>
          </div>

        </div>

      </div>
      {/* <button onClick={showAlert} className="btn btn-primary btn-lg">Show Alert</button> */}

      <div className="social">
          <h2>Follow On</h2>
      

     
      <OwlCarousel className='owl-theme' autoplay loop margin={10}   items={4} nav  responsive= {
                {
                    '1':{
                        items: 1
                    },
                    '1025': {
                        items: 4
                    }
                }
                
            }>
    <div class='item'>
      <img src="/images/social/1 (1).png" alt="" />
    
        <a href=""> Freelancer</a>
    </div>
    <div class='item'>
      <img src="/images/social/1 (2).png" alt="" />
      
        <a href="#">Twitter</a>
    </div>
    <div class='item'>
      <img src="/images/social/1 (3).png" alt="" />
       <a href="#">Github </a>
    </div>
    <div class='item'>
      <img src="/images/social/1 (4).png" alt="" />
        <a href="#">Instagram</a>
    </div>
    <div class='item'>
      <img src="/images/social/1 (5).png" alt="" />
        <a href="#">Linkedin </a>
    </div>
    <div class='item'>
      <img src="/images/social/1 (6).png" alt="" />
        <a href="#">Facebook</a>
    </div>
    <div class='item'>
      <img src="/images/social/1 (7).png" alt="" />
        <a href="#">Youtube</a>
    </div>
    
    
</OwlCarousel>
</div>
    </section>
    </div>
    );
}

export default Contact;