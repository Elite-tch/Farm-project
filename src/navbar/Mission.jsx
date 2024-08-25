import React from 'react';
import MissionPage from './mission/missionpage.jsx';
import Footer from './landingpage/footer.jsx';

const Mission = () => {
    return (
        <div>
            <MissionPage
              title="Our Mission"
             para="Empowering people through sustainable agriculture and innovative solutions."
          text="At CeciFarm, we are dedicated to transforming the agricultural landscape by offering premium quality fruits and farm products directly from our farm to your table. 
              Our mission is to foster a sustainable farming ecosystem, reduce food wastage, and ensure that everyone has access to fresh, nutritious, and affordable food.
              We believe in supporting local farmers, promoting eco-friendly practices, and contributing to the well-being of our community."
   title1="Sustainability"
                para1="We prioritize environmentally-friendly practices to ensure a healthy planet for future generations."
        title2="Quality "
        para2="Our commitment to quality ensures that every product meets the highest standards of excellence. "
       title3="Community"
            para3="We work hand-in-hand with local farmers and support communities to promote economic growth and development."
                
       title4="Join Us in Our Journey"
                para4="Become a part of our mission to promote sustainable agriculture and ensure access to fresh farm products."
         button="Learn More"       
                
                
                />
            <Footer />
        </div>
    );
}

export default Mission;
