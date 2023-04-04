import React from 'react';

const Item = ({image, title, subtitle }) => {

    return (
      <div className="item-container">
        <img className="item-image" src={image} alt="event" />
        <div className="item-description">
          <p className="item-title">{title}</p>
          <p className="item-subtitle">{subtitle}</p>
        </div>
      </div>
    )
};

export default Item;
