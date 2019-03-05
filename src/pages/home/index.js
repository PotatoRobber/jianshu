import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
	 } from './style';

class Home extends PureComponent {

	handleScrollTop(){
		window.scrollTo(0,0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
				</HomeRight>
				<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
			</HomeWrapper>
		)
	}
	componentDidMount() {
			this.props.changeHomeData();		
	}
}

const mapDispatch= (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	}
});

export default connect(null,mapDispatch)(Home);