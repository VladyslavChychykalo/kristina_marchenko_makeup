import React from "react";

const ImageRandomCard = ({ galleryItem }) => {
  console.log(galleryItem);
  return (
    <div>
      <img src={galleryItem} alt="makeup_image" />
    </div>
  );
};

export default ImageRandomCard;
