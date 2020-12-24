import React from 'react';

const ImageCard = ({
  image,
  name = '',
  location = '',
  handleClick = () => null,
  ImageCardclassName = '',
  detailClassName = '',
  nameClassName = '',
  locationClassName = '',
}) => {
  return (
    <div className={`image__card ${ImageCardclassName}`} onClick={handleClick}>
      <img src={image} alt='search' className='photo' />
      <div className={`details ${detailClassName}`}>
        <h3 className={`name ${nameClassName}`}>{name}</h3>
        <h5 className={`location ${locationClassName}`}>{location}</h5>
      </div>
    </div>
  );
};

export default ImageCard;
