import React from "react";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/scss/image-gallery.scss';

const images = [
    {
      original: "src/assets/image/cards/card-açai4.png",
      thumbnail: "src/assets/image/cards/card-açai4-min.png",
    },
    {
      original: "src/assets/image/cards/card-açai3.png",
      thumbnail: "src/assets/image/cards/card-açai3-min.png",
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
      return <ImageGallery className='gallery' items={images} />;
    }
  }
  export default Gallery;
