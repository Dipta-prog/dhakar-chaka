import React from 'react';
import { Link } from 'react-router-dom';

export default function Services(props) {
  const { transport, imgUrl } = props.item;
  // const handleBook = (rideType) => {
  //   console.log('clicked', rideType);
  // }
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/book/${transport}`}>
      <div className="card mb-4 shadow rounded">
        <div className="d-flex text-center" style={{ paddingTop: "20px" }}>
          <div >
            <img src={imgUrl} style={{ width: '50%' }} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="d-flex text-center">
          <div className="card-body">
            <h5>{transport}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
