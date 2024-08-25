import React from 'react';

function FruitsProductPage(props) {
const handleWhatsAppClick = (message) => {
    const phoneNumber = "+2349135537940";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="container-fluid">
      <div className="slide-section pt-3">
        <h4 className="stem-header pt-3">{props.fslidetitle}</h4>

        <div className="product-section">
          {/* First Product */}
          <div className="card product-item shadow-lg">
            <img src={props.ffirstImg} alt="first-slide" className="slide-img" />
            <h6 className="img-title">{props.ffirstImgtitle}</h6>
            <div className="slide-button">
              <p className="slide-price">{props.ffirstImgprice}</p>
 <button              className="slide-button" 
   onClick={() => handleWhatsAppClick(`I'm interested in the ${props.firstImgtitle} priced at ${props.ffirstImgprice}`)}
   >
                {props.button}
              </button>
            </div>
          </div>

          {/* Second Product */}
          <div className="card product-item shadow-lg">
            <img src={props.fthirdImg} alt="third-slide" className="slide-img" />
            <h6 className="img-title">{props.fthirdImgtitle}</h6>
            <div className="slide-button">
              <p className="slide-price">{props.fthirdImgprice}</p>
              <button
                className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.fthirdImgtitle} priced at ${props.fthirdImgprice}`)}
                
              >
                {props.button}
              </button>
            </div>
          </div>

          {/* Third Product */}
          <div className="card product-item shadow-lg">
            <img src={props.ffourthImg} alt="fourth-slide" className="slide-img" />
            <h6 className="img-title">{props.ffourthImgtitle}</h6>
            <div className="slide-button">
              <p className="slide-price">{props.ffourthImgprice}</p>
              <button
                className="slide-button"
  onClick={() => handleWhatsAppClick(`I'm interested in the ${props.ffourthImgtitle} priced at ${props.ffourthImgprice}`)}            
              >
                {props.button}
              </button>
            </div>
          </div>

          {/* Fourth Product */}
          <div className="card product-item shadow-lg">
            <img src={props.fsixthImg} alt="sixth-slide" className="slide-img" />
            <h6 className="img-title">{props.fsixthImgtitle}</h6>
            <div className="slide-button">
              <p className="slide-price">{props.fsixthImgprice}</p>
              <button
                className="slide-button"
                onClick={() => handleWhatsAppClick(`I'm interested in the ${props.fsixImgtitle} priced at ${props.fsixImgprice}`)}
                
              >
                {props.button}
              </button>
            </div>
          </div>

          {/* Fifth Product */}
          <div className="card product-item shadow-lg">
            <img src={props.fseventhImg} alt="seventh-slide" className="slide-img" />
            <h6 className="img-title">{props.fseventhImgtitle}</h6>
            <div className="slide-button">
              <p className="slide-price">{props.fseventhImgprice}</p>
              <button
                className="slide-button"
     onClick={() => handleWhatsAppClick(`I'm interested in the ${props.fseventhImgtitle} priced at ${props.fseventhImgprice}`)}           
              >
                {props.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FruitsProductPage;
