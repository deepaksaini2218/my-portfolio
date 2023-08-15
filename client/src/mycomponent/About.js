import React from 'react';
import './About.css'
import CountUp from 'react-countup';
import '../noframework.waypoints'

function About(props) {
	return (
		<div>
			<section id="about" class="about">
				<div class="container">

					<div class="section-title">
						{/* <span>About Me</span> */}
						<h2>About Me</h2>
						<p>As an M.Tech graduate and web developer, I have acquired advanced knowledge and skills in web development. With my expertise in programming languages, frameworks, and database management, I create efficient and user-friendly web applications and websites. I am passionate about staying updated with the latest industry trends and continuously enhancing my skills to deliver high-quality, innovative web solutions. With my M.Tech background, I bring a strong analytical and problem-solving mindset to tackle complex challenges in web development.</p>
					</div>

					<div class="row">
						<div class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
						<div class="col-lg-8 d-flex flex-column align-items-stretch">
							<div class="content ps-lg-4 d-flex flex-column justify-content-center">
								<div class="row">
									<div class="col-lg-6">
										<ul>
											<li><i class="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Deepak saini</span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href='https://main--deepak-saini.netlify.app/'> Deepak-Saini</a></span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-8685068567</span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Rewari , Haryana</span></li>
										</ul>
									</div>
									<div class="col-lg-6">
										<ul>
											<li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sainimonti17@gmail.com.com</span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
										</ul>
									</div>
								</div>
								
							</div>

							<div class="skills-content ps-lg-4">
								<div class="progress">
									<span class="skill">HTML <i class="val">80%</i></span>
									<div class="progress-bar-wrap">
										
										<div class="progress-bar1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" ></div>
									
									</div>
								</div>

								<div class="progress">
									<span class="skill">CSS <i class="val">75%</i></span>
									<div class="progress-bar-wrap">
										<div class="progress-bar2" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="progress">
									<span class="skill">Bootstrap <i class="val">80%</i></span>
									<div class="progress-bar-wrap">
										<div class="progress-bar1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>

								<div class="progress">
									<span class="skill">JavaScript <i class="val">70%</i></span>
									<div class="progress-bar-wrap">
										<div class="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="progress">
									<span class="skill">React JS <i class="val">70%</i></span>
									<div class="progress-bar-wrap">
										<div class="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="progress">
									<span class="skill">Core PHP <i class="val">70%</i></span>
									<div class="progress-bar-wrap">
										<div class="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>

						</div>

						{/* <div class="row mt-n4">
							<div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
								<div class="count-box">
									<i class="bi bi-emoji-smile"

									></i><CountUp end={2} />

									<p><strong>Happy Clients</strong> </p>
								</div>
							</div>

							<div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
								<div class="count-box">
									<i class="bi bi-journal-richtextr"

									></i>
									<CountUp end={5} />

									<p><strong>Projects</strong> </p>
								</div>
							</div>

							<div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
								<div class="count-box">
									<i class="bi bi-clock"

									></i>
									<CountUp end={1} />

									<p><strong>Years of experience</strong></p>
								</div>
							</div>

							<div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
								<div class="count-box">
									<i class="bi bi-award"

									></i>
									<CountUp end={2} />

									<p><strong>Awards</strong></p>
								</div>
							</div>
						</div> */}
					</div>

				</div>
        <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Deepak Saini</h4>
              <p><em>Innovative and deadline-driven Web Delover  experienced in designing and developing user-centered website  from initial concept to final.</em></p>
              <ul>
                <li>Shiv Nagar , Rewari</li>
                <li>+91-8685068567</li>
                <li>sainimonti17@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Master of Technology &amp; CSE</h4>
              <h5>2024
			  </h5>
              <p><em>Dronacharya College of Engineering</em></p>
              <p>Pursuing M.Tech CSE</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Technology &amp; CSE</h4>
              <h5>2021</h5>
              <p><em>Indira Gandhi University</em></p>
              <p> Graduated in B.Tech CSE with 60%</p>
            </div>
			<h3 class="resume-title">Skills</h3>
            <div class="resume-item">
              {/* <h4>Intern IT-Executive</h4>
              <h5>Apr/2023 - Present</h5> */}
              {/* <p><em>Ismart TechSpeeds Innovative Electrical Appliances Pvt. Ltd.  </em></p> */}
              <ul>
                <li className='skills'>HTML</li>
                <li className='skills'>CSS</li>
                <li className='skills'>BOOTSTRAP</li>
                <li className='skills'>JAVASCRIPT</li>
                <li className='skills'>REACT JS</li>
                <li className='skills'>CORE PHP</li>

              </ul>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Intern IT-Executive</h4>
              <h5>Feb/2023 - Jul/2023</h5>
              <p><em>Ismart TechSpeeds Innovative Electrical Appliances Pvt. Ltd.  </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the  layout</li>
                <li>Work on the desigining of <a href="https://techspeeds.com/index.html"> Techspeeds </a> Website </li>
                <li>Made template design on canva</li>
                {/* <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
              </ul>
            </div>
            <h3 class="resume-title">Certifications</h3>
            <div class="resume-item">
              <h4>Basic Computers</h4>
              <h5> Sep/2017 - Nov/2017</h5>
              <p><em>TINT Computer Center</em></p>
              <ul>
                <li>Learn about the MS-office and its tools</li>
                <li>Learn Basics of computer </li>
                <li>Study the <b>C</b> Language</li><br />
                {/* <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
              </ul>
            </div>
            <div class="resume-item">
              <h4>Full Stack</h4>
              <h5>Sep/2021 - Feb/2022</h5>
              <p><em>SSDN Technologies </em></p>
              <ul>
                <li>Learn About the designing and development part of a website</li>
                <li>Work on the HTML, CSS , BOOTSTRAP AND JAVASCRIPT </li>
                <li>learn about the  frameworks like <b>React js  </b></li>
                {/* <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
              </ul>
            </div>
           
            
          </div>
        </div>

      </div>
    </section>

    
			</section>
		

		</div>
	);
}

export default About;