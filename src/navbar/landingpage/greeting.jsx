import React from 'react';

function Greeting(event) {
   
      
      return (
         <div>
           <div className="hero-section text-center pt-5">      
   <h1 className="hero-tittle ">
    {event.title} </h1>
<h4 className="hero-subtittle">
 {event.subtitle}  </h4>
  <p className="hero-text">     {event.texthero} </p>            
          <div className="hero-button">
<button className="button">
            {event.button}
            </button>
</div>
   </div>  
           
 
      
</div>
    






    
  
           
      )
   }





     



            

export default Greeting;






