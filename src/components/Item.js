import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrItem } from '../app/actions';

const Item = ({id, image, title, subtitle }) => {
  const dispatch = useDispatch();
  console.log("hit item component")
  return (
    <Link to={`/item/${id}`} onClick={() => dispatch(setCurrItem({id, image, title, subtitle}))}>
      <div className="item-container" key={id}>
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
