import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item, image, title, subtitle }) => {

    return (
      <Link to={`/item/${item.id}`} state={{item: item}}>
        <div className="item-container" key={item.id}>
          <img className="item-image" src={image} alt="event" />
          <div className="item-description">
            <p className="item-title">{title}</p>
            <p className="item-subtitle">{subtitle}</p>
          </div>
        </div>
      </Link>
    )
};

export default Item;
