import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as loginReducer } from '../pages/login/store';

export default combineReducers({
	header: headerReducer,
	home: homeReducer,
	login: loginReducer
})