import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './mycomponent/Home';
import About from './mycomponent/About';
import Contact from './mycomponent/Contact';
import Service from './mycomponent/Service';
import Footer from './mycomponent/Footer'
import Project from './mycomponent/Project'
import Navbar from './mycomponent/Navbar';
import ScrollspyNav from "react-scrollspy-nav";
import ScrollSpy from "react-ui-scrollspy";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">

      <Navbar/>



      
        
       
                <ScrollSpy>
                
                <div>
                   
                    <div id="section_1"  className='is-active'><span><Home /></span></div>
                    <div id="section_2" ><span><About /></span></div>
                    <div id="section_3" ><span><Contact /></span></div>
                    <div id="section_4" ><span><Service /></span></div>
                    <div id="section_5" ><span><Project /></span></div>
                    
                   
                </div>
                </ScrollSpy>

                <Footer/>


                <WhatsAppWidget
            phoneNo="918685068567"
            position="left"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            // messageBoxTxt="Hi Team, is there any related service available ?"
            iconSize="50"
            iconColor="white"
            iconBgColor="green"
            headerIcon="/img/logo/logo.png"
            headerIconColor="green"
            // headerIconColor="green"
            headerIconBgColor="black"
            headerTxtColor="black"
            headerBgColor="green"
            headerTitle="DEEPAK SAINI"
            headerCaption="Online"
            // bodyBgColor="./public/images/wbg.png"
            chatPersonName="Support"
            chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
            // footerBgColor="#999"
            placeholder="Type a message.."
            // btnBgColor="yellow"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />
        <ScrollToTop smooth style={{backgroundColor: "green" ,marginBottom:"-22px"} } color='white' />
      {/* </div> */}
            

    </div>
  );
}

export default App;
