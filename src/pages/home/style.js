import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
		padding-bottom: 23px;
		border-bottom: 1px solid #dcdcdc;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		display: inherit;
		margin: -7px 0 4px;
		color: rgb(51, 51, 51);
		font-size: 18px;
		font-weight: 700;
		line-height: 1.5;
	}
	.desc {
		font-size: 13px;
		color: #999;
		line-height:24px;
		margin-bottom: 8px;
		text-align: left;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;
export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	line-height: 300px;
	text-align: center;
`;
export const LodeMore = styled.div`
	width: 100%;
	height: 40px;
	margin: 30px 0;
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;
export const BackTop = styled.div`
	position: fixed;
	right: 50px;
	bottom: 20px;	
	width: 60px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 14px;
	cursor: pointer;
	border: 1px solid #ccc;
	border-radius: 5px;
	color: 1px solid #ccc;
`;