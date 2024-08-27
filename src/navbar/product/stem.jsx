import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar'; 
import { Scrollbar, Autoplay, EffectFade } from 'swiper/modules';

function StemProduct(props) {
const handleWhatsAppClick = (message) => {
    const phoneNumber = "+2349135537940";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className="container-fluid">
      <h2 className="title pt-4 text-center">{props.title}</h2>
   <p className="text-center titlepara"> {props.titlepara}</p>
      <div className="slide-section pt-3">
        <h4 className="stem-header">{props.slidetitle}</h4>

        <Swiper
          modules={[Scrollbar, Autoplay, EffectFade]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          spaceBetween={50}
          breakpoints={{
            640: {
                width:640,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide key="1">
            <div className="card shadow-lg">
              <img src={props.firstImg} alt="first-slide" className="slide-img" />
              <h6 className="img-title">{props.firstImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.firstImgprice}</p>
<button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.firstImgtitle} priced at ${props.firstImgprice}`)} >{props.button}</button>
                
              </div>
              <div className="slide-rating">
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
              </div>
            </div>
          </SwiperSlide>
          
<SwiperSlide key="3">
            <div className="card">
              <img src={props.thirdImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.thirdImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.thirdImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.thirdImgtitle} priced at ${props.thirdImgprice}`)}>{props.button}</button>
              </div>
              <div className="slide-rating">
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star rating"></i>
                <i className="bi bi-star rating"></i>
              </div>
            </div>
          </SwiperSlide>
 

          <SwiperSlide key="4">
            <div className="card">
              <img src={props.fourthImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.fourthImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.fourthImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.fourthImgtitle} priced at ${props.fourthImgprice}`)}>{props.button}</button>
             </div>
              <div className="slide-rating">
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-half rating"></i>
              </div>
            </div>
          </SwiperSlide>





<SwiperSlide key="6">
            <div className="card">
              <img src={props.sixthImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.sixthImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.sixthImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.sixthImgtitle} priced at ${props.sixthImgprice}`)}>{props.button}</button>
              </div>
              <div className="slide-rating">
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-half rating"></i>
              </div>
            </div>
          </SwiperSlide>

<SwiperSlide key="7">
            <div className="card">
              <img src={props.seventhImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.seventhImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.seventhImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.seventhImgtitle} priced at ${props.seventhImgprice}`)}>{props.button}</button>
              </div>
              <div className="slide-rating">
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
              </div>
            </div>
          </SwiperSlide>


          
          
          

          

          
          

        </Swiper>
      </div>
    </div>
  );
}

export default StemProduct;

   

  
