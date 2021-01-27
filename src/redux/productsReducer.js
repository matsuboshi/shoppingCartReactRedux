import allProducts from './allProducts';

const initialState = [...allProducts];

export default function products(state = initialState, action) {
  return state;
}
