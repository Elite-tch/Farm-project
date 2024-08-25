import React from 'react';

function GalleryComponent(props) {
  return (
    <div className="gallery">
      <div className="container-fluid">
      <h1 className="gallery-title text-center">Welcome to Our Farm Gallery</h1>  
        <p className="text-center gallery-para">Browse through our collection of farm-fresh products.</p>
        
        <div className="gallery-content">
          <div className="gallery-row">

   <div className="gallery-item">
              <img src={props.img1} className="gallery-img" alt="Image 1" />
            </div>

            <div className="gallery-item">
              <img src={props.img2} className="gallery-img" alt="Image 2" />
            </div> 

            <div className="gallery-item">
              <img src={props.img3} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img4} className="gallery-img" alt="Image 3" />
            </div>

                    <div className="gallery-item">
              <img src={props.img5} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img6} className="gallery-img" alt="Image 3" />
            </div>
        <div className="gallery-item">
              <img src={props.img7} className="gallery-img" alt="Image 3" />
            </div>
        <div className="gallery-item">
              <img src={props.img8} className="gallery-img" alt="Image 3" />
            </div>
        <div className="gallery-item">
              <img src={props.img9} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img10} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img11} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img12} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img13} className="gallery-img" alt="Image 3" />
            </div>
        <div className="gallery-item">
              <img src={props.img14} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img15} className="gallery-img" alt="Image 3" />
            </div>
        <div className="gallery-item">
              <img src={props.img16} className="gallery-img" alt="Image 3" />
            </div>
          <div className="gallery-item">
              <img src={props.img17} className="gallery-img" alt="Image 3" />
            </div>          
        <div className="gallery-item">
              <img src={props.img18} className="gallery-img" alt="Image 3" />
            </div>
        <div className="gallery-item">
              <img src={props.img19} className="gallery-img" alt="Image 3" />
            </div>

        <div className="gallery-item">
              <img src={props.img20} className="gallery-img" alt="Image 3" />
            </div>
        <div className="gallery-item">
              <img src={props.img21} className="gallery-img" alt="Image 3" />
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryComponent;
