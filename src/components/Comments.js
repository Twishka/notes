import React, { Component } from 'react'
import styled from 'styled-components'

const light = require('../assets/fonts/OpenSans-Light.ttf')

class Comments extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newComment: '',
		}
	}

	render() {
		return (
			<CommentsBase>
				<div className={"commentsTitle"}>Comments #{this.props.pickedNote + 1}</div>
				{this.props.comments.map((comment, index) => (
					<div key={index} className={"row"}>
						<div className={!!(index % 2) ? "picture evenPicture" : "picture oddPicture"}/>
						<div className={"commentText"}>{comment}</div>
					</div>
				))}
				<div className={"addCommentRow"}>
					<div className={"picture commentPicture"}/>
						<textarea
							rows="5"
							className={"commentInput"}
							onKeyPress={event => this.handlePress(event)}
							onChange={async event => this.setState({ newComment: event.target.value })}
							value={this.state.newComment}
						/>
					</div>
			</CommentsBase>
		);
	}
	
	handlePress = event => {
		if(event.key==='Enter' && (event.ctrlKey || event.metaKey)) {
			this.props.addComment(this.state.newComment)
			this.setState({ newComment: '' })
		}
	}
}

const CommentsBase = styled.div`
	height: 0%;
	width: 444px;
	margin-left: 20px;
	margin-top: 34px;
	margin-bottom: 34px;
	padding-top: 8px;
	padding-left: 18px;
	padding-right: 19px;
	padding-bottom: 14px;
	border: 1px solid #f2f2f2;
	background-color: #ffffff;
	box-shadow: 0.5px 0.5px 3px #ccc;
	.commentsTitle {
		color: #565a69;
		padding-bottom: 16px;
		font-family: ${light};
		font-size: 36px;
		font-weight: 300;
	}
	.row {
		display: flex;
		flex-direction: row;
		padding-bottom: 20px;
		padding-top: 14px;
		position: relative;
  	z-index: 1;
	}
	.row:before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		height: 1px;
		width: 95%;
		border-bottom: 1px solid #f2f2f2;
	}
	.addCommentRow {
		display: flex;
		flex-direction: row;
		padding-top: 14px;
	}
	.picture {
		width: 52px;
		height: 52px;
		margin-right: 14px;
	}
	.oddPicture {
		background-color: #ff8a00;
	}
	.evenPicture {
		background-color: #47568c;
	}
	.commentPicture {
		background-color: #e6e6e6;
	}
	.commentText {
		color: #666666;
		font-family: "Open Sans";
		font-size: 12px;
		width: 341px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.commentInput {
		width: 341px;
		word-break: break-word;
		border: 1px solid #cccccc;
		font-family: "Open Sans";
		font-size: 12px;
		color: #666666;
	}
`

export default Comments
