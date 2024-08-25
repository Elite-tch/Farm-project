import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar'; // Import Swiper styles for Scrollbar
import { Scrollbar, Autoplay, EffectFade } from 'swiper/modules';

function FruitProduct(props) {
  const handleWhatsAppClick = (message) => {
    const phoneNumber = "+2349135537940";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };


  return (
    <div className="container-fluid">
      <div className="slide-section pt-4">
        <h4 className="stem-header pt-3">{props.fslidetitle}</h4>

        <Swiper
          modules={[Scrollbar, Autoplay, EffectFade]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          effect="fade"
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide key="8">
            <div className="card shadow-lg">
              <img src={props.ffirstImg} alt="first-slide" className="slide-img" />
              <h6 className="img-title">{props.ffirstImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.ffirstImgprice}</p>
<button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.ffirstthImgtitle} priced at ${props.ffirstthImgprice}`)}>{props.button}</button>
                
              </div>
              <div className="slide-rating">
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-half rating"></i>
                <i className="bi bi-star rating"></i>
                
              </div>
            </div>
          </SwiperSlide>
          
<SwiperSlide key="9">
            <div className="card">
              <img src={props.fthirdImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.fthirdImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.fthirdImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.fthirdImgtitle} priced at ${props.fthirdImgprice}`)}>{props.button}</button>
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
 

          <SwiperSlide key="10">
            <div className="card">
              <img src={props.ffourthImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.ffourthImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.ffourthImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.ffourthImgtitle} priced at ${props.ffourthImgprice}`)}>{props.button}</button>
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





<SwiperSlide key="11">
            <div className="card">
              <img src={props.fsixthImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.fsixthImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.fsixthImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.fsixImgtitle} priced at ${props.fsixImgprice}`)}>{props.button}</button>
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

<SwiperSlide key="12">
            <div className="card">
              <img src={props.fseventhImg} alt="second-slide" className="slide-img" />
              <h6 className="img-title">{props.fseventhImgtitle}</h6>
              <div className="slide-button">
                <p className="slide-price">{props.fseventhImgprice}</p>
                <button className="slide-button" onClick={() => handleWhatsAppClick(`I'm interested in the ${props.fseventhImgtitle} priced at ${props.fseventhImgprice}`)}>{props.button}</button>
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

export default FruitProduct;

   

      
