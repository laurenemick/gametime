import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ItemDetails = () => {
  const { currItem } = useSelector(
    state => state
  );
  const { id, image, title, subtitle } = currItem;

  return (
    <div>
      <div className="item-details">
        <img className="details-image" src={image} alt="event" />
        <h1 className="details-title">{title}</h1>
        <h2 className="details-subtitle">{subtitle}</h2>
      </div>

      <div className="button">
        <Link to={'..'}><button className="button">Back</button></Link>
      </div>

    </div>
  );
}

export default ItemDetails;
