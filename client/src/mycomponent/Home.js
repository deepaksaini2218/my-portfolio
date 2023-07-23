import React from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect';
function Home(props) {
	return (
		<div>
			 <div className="home">

			 <div id="hero" class="hero route bg-image" >
    <div class="overlay-itro"></div>
    {/* <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          
          <h1 class="hero-title mb-4">I am  Deepak Saini</h1>
          <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          
        </div>
      </div>
    </div> */}
	<div className="home-content">
	<h1 className="home-title">
		I am Deepak saini
		</h1>
		<h2>I am </h2>
		<h2><Typewriter 
					options={{
						strings: ['web designer', 'web developer' , 'Front-end-developer'],
						autoStart: true,
						loop: true,
					}}	
				/></h2>
	</div>
	
  </div>



				{/* <h1>Welcome to my site</h1>
			
				<h2> <del>EAT,</del>  <del>CODE,</del>  <del>REPEAT</del> </h2>
			<h2>EAT THE CODE AND REPEAT </h2>
				<h1><Typewriter 
					options={{
						strings: ['web designer', 'web developer' , 'Front-end-developer'],
						autoStart: true,
						loop: true,
					}}	
				/></h1> */}
			</div> 
		
  

		</div>
	);
}

export default Home;