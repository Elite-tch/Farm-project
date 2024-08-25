import React from 'react';


function About(event) {
return (
<div>
<div className="about-section pt-3 text-center">
<h2 className="about-tittle">
            {event.about}
            </h2>
   <div className="row">
<div className="col-md-5">
<img src={event.img} className="about-img pt-2" />
</div>
<div className="col-md-6">
   <p className="about-text pt-2 ">
      {event.abouttext}
      </p>
</div>
      
</div>
</div></div>


  

  



  
)}

export default About;
