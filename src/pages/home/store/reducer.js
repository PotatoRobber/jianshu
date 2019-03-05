import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({ 
	articleList: [],
	recommendList:[],
	articlePage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			})
		case constants.ADD_ARTICLE_LIST:
			return state.merge({
				articleList: state.get('articleList').concat(action.list),
				articlePage: action.nextPage
			})
		default: 
			return state;
	}
}