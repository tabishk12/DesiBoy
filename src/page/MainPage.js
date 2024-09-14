import React, { useState, useEffect } from 'react';
import '../App.css';
import  RateCard from "../Components/Card";
import  EscortCard from "../Components/EscortCard";
// Import images from the local folder
import img1 from '../img/pic1.png';
import img2 from '../img/pic2.png';
import img3 from '../img/pic3.png';
import img4 from '../img/pic4.png';

function MainPage() {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    // Use the imported local images instead of URLs
    const img = [img1, img2, img3, img4];
    setImages(img);
    setMainImage(img[0]);
  }, []);

  return (
    <div className="App">
      <section className="single-page">
        <div className="product">
          <div className="image-box">
            <div className="mainImg">
              <img src={mainImage} alt="Product" />
            </div>
            <div className="imgs">
              {images.map((src, index) => (
                <div className="mini-box" key={index} onMouseOver={() => setMainImage(src)}>
                  <img src={src} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="details-box">
            {<EscortCard/>
            /*             
            <ShopStoreDescription/>
            <ShopStoreDescription/> */}
          </div>
        </div>
            < RateCard/>
      </section>
    </div>
  );
}

export default MainPage;
