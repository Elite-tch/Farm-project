import React from 'react';

const MissionPage = (props) => {
  return (
    <div className="mission">       
    <div className="container-fluid ">
      
      <header className="text-center ">
        <h2 className="mission-title">{props.title}</h2>
        <p className="mission-subtitle">{props.para}     </p>
      </header>
      
      
<div className="mission-content ">
   <p className="mission-text text-center">
  {props.text}</p>
      </div>

      
<div className="mission-values ">
        <div className="row text-center">
<div className="col-md-4 content mx-2 shadow-lg ">
            <h3 className="values-title">{props.title1}</h3>
            <p className="values-description">
              {props.para1}
            </p>
          </div>
          
          <div className="col-md-4 mx-2 content shadow-lg">
            <h3 className="values-title">{props.title2}</h3>
   <p className="values-description"> {props.para2}</p>
          </div>
          
          <div className="col-md-4 mx-2 content shadow-lg">
 <h3 className="values-title">{props.title3}</h3>
<p className="values-description"> {props.para3}</p>
          </div>
          
        </div>
      </div>

      
   <div className="mission-cta text-center pt-4">
        <h2 className="joinus">{props.title4}</h2>
        <p className="cta-text">
          {props.para4}
        </p>
<button className=" mt-3">{props.button}</button>
      </div>
    </div>
      </div>
  );
};

export default MissionPage;
