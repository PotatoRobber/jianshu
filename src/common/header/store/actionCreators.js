import * as constants from './constants'
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data)
})

export const searchFocus = () => ({
	type: constants.SEARCH_FOUCS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;

			dispatch(changeList(data.data));
  	
		}).catch(() => {
			console.log('error');
		})	
	}
}