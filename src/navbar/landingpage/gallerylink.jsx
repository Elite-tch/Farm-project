import React from 'react';
import { Link } from 'react-router-dom';

function GalleryLink() {
  return (
    <div className="gallery-link-container">
      <Link to="/gallery" className="btn gallery-btn">Go to Gallery</Link>
    </div>
  );
}

export default GalleryLink;
