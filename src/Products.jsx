import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <div style={panelStyle}>
      <h2>Products</h2>

      <div style={cardsDivStyle}>
        {products.map((item) => (
          <div key={item.id} style={cardStyle}>
            <p>{item.name}</p>
            <p>$ {item.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch({ type: 'ADD_TO_CART', id: item.id })}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const panelStyle = {
  height: '100vh',
  width: '50vw',
  background: '#b2dfdb',
  padding: '10px',
};

const cardStyle = {
  background: '#80cbc4',
  width: '120px',
  height: '100px',
  fontWeight: 'bold',
  borderRadius: '15px',
  margin: '5px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  textAlign: 'center',
};

const cardsDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};
