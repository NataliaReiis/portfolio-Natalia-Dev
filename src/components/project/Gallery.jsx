import React from "react";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/scss/image-gallery.scss';

import card1 from "src/assets/image/cards/card-açai4.png"
import card1Mini from "src/assets/image/cards/card-açai4-min.png"

import card2 from "src/assets/image/cards/card-açai3.png"
import card2Mini from "src/assets/image/cards/card-açai3-min.png"


const images = [
    {
      original: card1,
      thumbnail: card1Mini,
    },
    {
      original: card2,
      thumbnail: card2Mini,
    },
    {
      original: "src/assets/image/cards/card-açai1.png",
      thumbnail: "src/assets/image/cards/card-açai1-min.png",
    },
    {
      original: "src/assets/image/cards/card-açai2.png",
      thumbnail: "src/assets/image/cards/card-açai2-min.png",
    },
    {
      original: "src/assets/image/cards/card-ks2.png",
      thumbnail: "src/assets/image/cards/card-ks2-min.png",
    },
    {
      original: "src/assets/image/cards/card-ks1.png",
      thumbnail: "src/assets/image/cards/card-ks1-min.png",
    },
    {
      original: "src/assets/image/cards/card-uj2.png",
      thumbnail: "src/assets/image/cards/card-uj2-min.png",
    },
    {
      original: "src/assets/image/cards/card-uj1.png",
      thumbnail: "src/assets/image/cards/card-uj1-min.png",
    },
    {
      original: "src/assets/image/cards/card-covid2.jpg",
      thumbnail: "src/assets/image/cards/card-covid2-min.jpg",
    },
    {
      original: "src/assets/image/cards/card-covid1.png",
      thumbnail: "src/assets/image/cards/card-covid1-min.png",
    },
  ];

  class Gallery extends React.Component {
    render() {
      return <div className='gallery'>
        <h1>Galeria de Artes</h1>
  
        <ImageGallery items={images} />;
      </div>
    }
  }
  export default Gallery;
