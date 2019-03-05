import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { 
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchWrapper,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';

class Header extends Component {

	getListArea() {
	const { focused, list} = this.props;//解构赋值
	
	if (focused) {
		return(
			<SearchInfo>
				<SearchInfoTitle>
				热门搜索
				<SearchInfoSwitch></SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{
						list.map((item) => {
							return <SearchInfoItem key={item}>{item}</SearchInfoItem>
						})
					}
				</SearchInfoList>
			</SearchInfo>
			)
	}else{
		return null;
	}
}

	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return (
			<HeaderWrapper>
				<Link to='/'>
				<Logo/>
				</Link>
				<Nav>
					<Link to='/'><NavItem className='left active'>首页</NavItem></Link>
					<NavItem className='left'>下载app</NavItem>
					{
						login ? <NavItem onClick={logout} className='right'>退出</NavItem> : 
						<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>	
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={()=>handleInputFocus(list)}
								onBlur={handleInputBlur}></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont': 'iconfont'}>
						&#xe62b;
						</i>
					
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
						<i className="iconfont">&#xe615;</i>
						写文章
						</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		focused: state.get('header').get('focused'), 
		list: state.getIn(['header', 'list']),
		login: state.getIn(['login','login'])
		// get().get()和getIn等价
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());//等价于IF ELSE
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);