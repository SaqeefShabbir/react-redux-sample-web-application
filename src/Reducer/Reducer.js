import { combineReducers } from 'redux'

import LoginReducer from '../Features/Login/Reducer';
import MenuReducer from '../Features/Menu/Reducer';
import OrderReducer from '../Features/Order/Reducer';

const rootReducer = combineReducers({
    login: LoginReducer,
    menu: MenuReducer,
    order: OrderReducer,
})

export default rootReducer
