import React from 'react';
import './Service.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Service(props) {
    return (
        <div id='service'>
	<section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Our Services</h2>
          <p>We provide best web development service among the world. If you are looking for best website contact us now.</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Web Development</a></h4>
              <p class="description">web development is a dynamic field that combines creativity,
                                        technical expertise, and problem-solving skills to create effective and functional online experiences.
                                        It plays a crucial role in bringing websites and web applications to life and enabling businesses and individuals to establish a strong online presence.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Graphic Design</a></h4>
              <p class="description"> Graphic design is a creative field that involves the visual communication and arrangement of images,
                                        text, and other elements to convey a message or evoke a specific response.
                                        It combines artistic skills, typography, layout design, and digital tools to create visual
                                        solutions for various mediums such as print, digital, and multimedia.
</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Web Hosting</a></h4>
              <p class="description">"Supercharge your online presence with our reliable web hosting services! We offer lightning-fast servers, secure data storage, and 24/7 customer support to ensure your website stays up and running smoothly. Experience top-notch performance and unmatched value for your website hosting needs!"</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">web Design</a></h4>
              <p class="description"> A well-designed website not only looks visually
                                        appealing but also considers usability, accessibility, and performance.
                                        It involves designing intuitive navigation, clear and organized content structure, responsive layouts
                                        for different devices, and attention to details such as typography, colors, and imagery.</p>
            </div>
          </div>

        </div>

		
    

      </div>
<div className="ser">
    <h2>Tech Stacks We work On</h2>
    <marquee behavior="" direction="right">
        <div className="stack">
            <img src="/images/language/html.png" alt="" />
            <h3>HTML</h3>
        </div>
        <div className="stack">
            <img src="/images/language/css.png" alt="" />
            <h3>CSS</h3>
        </div>
        <div className="stack">
            <img src="/images/language/js.png" alt="" />
            <h3>JAVASCRIPT</h3>
        </div>
        <div className="stack">
            <img src="/images/language/react.png" alt="" />
            <h3>REACT JS</h3>
        </div>
        <div className="stack">
            <img src="/images/language/node.png" alt="" />
            <h3>NODE JS</h3>
        </div>
        <div className="stack">
            <img src="/images/language/mongo.png" alt="" />
            <h3>MONGO DB</h3>
        </div>
        <div className="stack">
            <img src="/images/language/mysql.png" alt="" />
            <h3>MY SQL</h3>
        </div>
        <div className="stack">
            <img src="/images/language/php.png" alt="" />
            <h3>PHP</h3>
        </div>
        <div className="stack">
            <img src="/images/language/java.png" alt="" />
            <h3>JAVA</h3>
        </div>
    </marquee>
</div>

    </section>

            {/* <section id="services" class="services-mf pt-5 route">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="title-box text-center">
                                <h3 class="title-a">
                                    Services
                                </h3>
                                <p class="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="service-box">
                                <div class="service-ico">
                                    <span class="ico-circle"><i class="bi bi-briefcase"></i></span>
                                </div>
                                <div class="service-content">
                                    <h2 class="s-title">Web Design</h2>
                                    <p class="s-description text-center">
                                        A well-designed website not only looks visually
                                        appealing but also considers usability, accessibility, and performance.
                                        It involves designing intuitive navigation, clear and organized content structure, responsive layouts
                                        for different devices, and attention to details such as typography, colors, and imagery.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box">
                                <div class="service-ico">
                                    <span class="ico-circle"><i class="bi bi-card-checklist"></i></span>
                                </div>
                                <div class="service-content">
                                    <h2 class="s-title">Web Development</h2>
                                    <p class="s-description text-center">
                                        web development is a dynamic field that combines creativity,
                                        technical expertise, and problem-solving skills to create effective and functional online experiences.
                                        It plays a crucial role in bringing websites and web applications to life and enabling businesses and individuals to establish a strong online presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box">
                                <div class="service-ico">
                                    <span class="ico-circle"><i class="bi bi-bar-chart"></i></span>
                                </div>
                                <div class="service-content">
                                    <h2 class="s-title">Photography</h2>
                                    <p class="s-description text-center">
                                        Photography is the art of capturing and preserving images using a camera.
                                        It allows us to freeze moments, convey emotions, and showcase the beauty of the world.
                                        Photographers use their skills to frame subjects, manipulate light, and create visually compelling images. Photography is accessible to all through digital cameras
                                        and smartphones, and it has the power to evoke emotions, document history, and inspire us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box">
                                <div class="service-ico">
                                    <span class="ico-circle"><i class="bi bi-binoculars"></i></span>
                                </div>
                                <div class="service-content">
                                    <h2 class="s-title">Responsive Design</h2>
                                    <p class="s-description text-center">
                                        Responsive design is an approach to web design that ensures websites and applications adapt to different
                                        devices and screen sizes. It uses flexible grids, fluid images, and media
                                        queries to create a seamless user experience. By implementing responsive design, developers can provi
                                        de a consistent and user-friendly interface across various platforms,
                                        improving usability and engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box">
                                <div class="service-ico">
                                    <span class="ico-circle"><i class="bi bi-brightness-high"></i></span>
                                </div>
                                <div class="service-content">
                                    <h2 class="s-title">Graphic Design</h2>
                                    <p class="s-description text-center">
                                        Graphic design is a creative field that involves the visual communication and arrangement of images,
                                        text, and other elements to convey a message or evoke a specific response.
                                        It combines artistic skills, typography, layout design, and digital tools to create visual
                                        solutions for various mediums such as print, digital, and multimedia.

                                        Graphic designers use their creativity, knowledge of design p
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-box">
                                <div class="service-ico">

                                    <span class="ico-circle"><i class="bi bi-calendar4-week"></i></span>
                                </div>
                                <div class="service-content">
                                    <h2 class="s-title">Marketing Services</h2>
                                    <p class="s-description text-center">
                                        Marketing services involve strategies and activities to promote businesses, products, or services.
                                        They include branding, digital marketing, advertising, market research, social media management
                                        , SEO, PR, content creation, email marketing, and analytics. These services
                                        aim to increase brand visibility, attract customers, and achieve business goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default Service;