import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ShoppingCart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) =>
    state.cart.filter((item) => item.qty > 0)
  );

  const totalQty = useSelector((state) =>
    state.cart.reduce((acc, cur) => acc + cur.qty, 0)
  );

  const totalPrice = useSelector((state) =>
    state.cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
  );

  return (
    <div style={panelStyle}>
      <h2>
        Shopping Cart ({totalQty})
        <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
          CLEAR CART
        </button>
      </h2>

      <table>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={{ width: '170px' }}>{item.name}</td>
              <td style={{ width: '90px' }}>
                $ {(item.price * item.qty).toFixed(2)}
              </td>
              <td style={{ width: '80px', textAlign: 'center' }}>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                  }
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', id: item.id })}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Total: $ {totalPrice.toFixed(2)}</h4>
    </div>
  );
}

const panelStyle = {
  height: '100vh',
  width: '50vw',
  background: '#f8bbd0',
  padding: '10px',
};
