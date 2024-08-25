import React from 'react';


function ReviewText(props) {
   return(
     <div className="review shadow-lg"> 
<div className="container-fluid">
      <h2 className="review-title text-center pb-3">{props.title} </h2>
<div className="review-content">
  
<div className="review-item shadow-lg">
 <h4 className="header-review">{props.header1} </h4>
 <p className="subheader-review">{props.para1} </p>
<h6 className="review-name">{props.name1} </h6>
</div>

<div className="review-item shadow-lg">
 <h4 className="header-review">{props.header1} </h4>
 <p className="subheader-review">{props.para1} </p>
<h6 className="review-name">{props.name1} </h6>
</div>

<div className="review-item shadow-lg">
 <h4 className="header-review">{props.header1} </h4>
 <p className="subheader-review">{props.para1} </p>
<h6 className="review-name">{props.name1} </h6>
</div>


  
</div>
  
</div>
    </div>  




     )
}



export default ReviewText;

  
