import React from "react";
import "./PictureCard.css";
function PictureCard({ pic, w, h, price, title }) {
  return (
    <div className="pictureCard">
      <div className="pictureCard__info">
        <p className="pictureCard__infoDetails">{title}</p>
        <p className="pictureCard__infoPrice">${price}</p>
      </div>
      <img src={pic} alt="" style={{ height: `${h}px`, width: `${w}px` }} />
    </div>
  );
}

export default PictureCard;
