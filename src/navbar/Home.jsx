import React from 'react';
import Greeting from './landingpage/greeting.jsx';
import About from './landingpage/about.jsx';
import Products from './product/ceciproduct.jsx';
import OfferSection  from './landingpage/offer.jsx';
import GalleryLink from "./landingpage/gallerylink.jsx";
import Review from './landingpage/review.jsx';




let imageStyle = {
  width: '100%',
  height: '90vh',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("apple.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  marginTop: '70px',
  paddingTop: '10%',
};

function Home() {
  return (
    <div>
      <div className="home" style={imageStyle}>
        <div className="container-fluid">
          <Greeting 
            title="Welcome to CeciFarm"
            subtitle="Your Source for Farm-Fresh Stems & Fruits"
            texthero="Discover the best in farm-fresh produce, straight from our fields to your doorstep."
            button="Shop Now" 
          />
        </div>
      </div>

      <div className="container-fluid">
        <About  
          about="About Me"
          img="profile.png"
          abouttext="I’m Daniel Jones, the founder of CeciFarm. Farming is my passion, and I’m dedicated to growing high-quality stems and fruits with sustainable practices. CeciFarm is a reflection of my love for the land, bringing fresh, natural products from my farm to your home. Thank you for being a part of this journey."
                         
          />
      </div>
<Products />
<OfferSection />
<GalleryLink /> 
<Review />


      
    </div>
  );
}

export default Home;
