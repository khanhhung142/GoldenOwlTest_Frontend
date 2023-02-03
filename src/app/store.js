import { combineReducers } from 'redux';
import { CartReducer } from './reducers/CartReducer';
import { ShoesReducer } from './reducers/ShoesReducer';

const rootReducer = combineReducers({
  CartReducer,
  ShoesReducer
})

export default rootReducer