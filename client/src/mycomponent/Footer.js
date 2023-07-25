import React from 'react';
import './Footer.css'
import { FiTwitter} from 'react-icons/fi';
import { BsFacebook,BsSkype,BsLinkedin,BsTelephonePlus} from 'react-icons/bs';
import { AiOutlineInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Footer(props) {
    return (
        <div>
            <hr className='foot' />
            <footer id="footer">

{/* <div class="footer-newsletter">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div> */}



<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3>Deepak Saini</h3>
        <p>
          Shiv Nagar <br></br>
          Rewari, 123401<br></br>
          India <br></br>
          <strong>Phone:</strong> <a className='mails' href="tel:+918685068567">+91 8685068567</a><br></br>
          <strong>Email:</strong> <a className='mails' href="mailto:sainimonti17@gmail.com"> sainimonti17@gmail.com</a><br></br>
        </p>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='about' spy={true} smooth={true} offset={-100} duration={500}>About </Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='service' spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact </Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='project' spy={true} smooth={true} offset={-100} duration={500}>Project</Link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Best Items</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> < Link to="">Web Design</Link></li>
          <li><i class="bx bx-chevron-right"></i> < Link to="">Web Development</Link></li>
          <li><i class="bx bx-chevron-right"></i> < Link to="">Front-end Development</Link></li>
          <li><i class="bx bx-chevron-right"></i> < Link to="">Web Hosting</Link></li>
          <li><i class="bx bx-chevron-right"></i> < Link to="">Graphic Design</Link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        
        <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="bx bxl-twitter"><FiTwitter/></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"><BsFacebook/></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"><AiOutlineInstagram/></i></a>
          <a href="#" class="youtube"><i class="bx bxl-instagram"><AiFillYoutube/></i></a>
          <a href="#" class="github"><i class="bx bxl-instagram"><AiFillGithub/></i></a>
        
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i><BsLinkedin/></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container footer-bottom clearfix">
  <div class="copyright">
    &copy; Copyright <strong><span>Deepak Saini</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
    {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ -->*/}
    Designed by <a href="#">Deepak Saini</a> 
  </div>
</div>
</footer>
        </div>
    );
}

export default Footer;