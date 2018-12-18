import React, { Component } from 'react';
import styled from 'styled-components'

const light = require('../assets/fonts/OpenSans-Light.ttf')

class Items extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newNoteName: '',
		}
	}
	render() {
		return (
			<ItemsBase>
				<div>
					<div className={"itemsTitle"}>
						Items
					</div>
					<div className={"row"}>
						<input
							value={this.state.newNoteName}
							className={"itemsInput"}
							onChange={(event) => this.setState({newNoteName: event.target.value})}
							placeholder="Type name here..."
						/>
						<div
							onClick={() => this.addNote()}
							className={"addButton"}
						>
							Add new
						</div>
					</div>
				</div>
				<div className={"notesContainer"}>
					{this.props.notes.map((note, index) => (
						<>
							<div
								onClick={() => this.pickNote(index)}
								key={index}
								className={this.props.pickedNote === index ? "note pickedNote" : "notPickedNote note"}
							>
								<div className={"noteInfo"}>
									<div className={"name"}>{note.name}</div>
									<div className={"commentsNumber"}>{note.comments.length}</div>
								</div>
								<div
									onClick={() => this.deleteNote(index)}
									className={"deleteButton"}
								>
									Delete
								</div>
							</div>
							<div className={"divider"}/>
						</>
					))}
				</div>
			</ItemsBase>
		);
	}
	
	addNote = async () => {
		if (this.state.newNoteName.length > 0) {
			this.props.addNote({name: this.state.newNoteName, comments: []})
			this.setState({newNoteName: ''})
		}
	}
	
	deleteNote = index => {
		this.props.deleteNote(index)
	}
	
	pickNote = index => {
		this.props.pickNote(index)
	}
}

const ItemsBase = styled.div`
	height: 0%;
	min-height: 523px;
	margin-left: 32px;
	margin-top: 34px;
	margin-bottom: 34px;
	padding-bottom: 8px;
	border: 1px solid #f2f2f2;
	background-color: #ffffff;
	box-shadow: 0.5px 0.5px 3px #ccc;
	width: 479px;
	.itemsTitle {
		color: #565a69;
		padding-bottom: 16px;
		font-family: ${light};
		font-size: 36px;
		font-weight: 300;
		margin-top: 8px;
		margin-right: 14px;
		margin-left: 25px;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	.itemsInput {
		width: 290px;
		margin-right: 11px;
		margin-left: 25px;
		padding-top: 7px;
		padding-left: 10px;
		padding-bottom: 8px;
		padding-right: 10px;
		border: 1px solid #cccccc;
		border-radius: 4px;
		font-family: "Open Sans";
		font-size: 16px;
	}
	.addButton {
		display: flex;
		width: 133px;
		padding-top: 7px;
		padding-bottom: 8px;
		margin-right: 14px;
		background-color: #27ccc0;
		font-family: "Open Sans";
		font-weight: 600;
		color: #ffffff;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		font-family: "Open Sans";
		font-size: 16px;
	}
	.itemsInput::placeholder {
		color: #b3b3b3;
	}
	.notesContainer {
		margin-top: 9px;
		width: 100%;
	}
	.pickedNote {
		margin-left: -3px;
		border-left: 5px solid #ff2f5a;
		padding-left: 29px;
	};
	.notPickedNote {
		padding-left: 31px;
	}
	.note {
		display: flex;
		align-items: center;
		padding-top: 16px;
		padding-bottom: 16px;
		justify-content: space-between;
		flex-direction: row;
		position: relative;
  	z-index: 1;
	};
	.note:before {
		content: "";
		position: absolute;
		left: 6%;
		bottom: 0;
		height: 1px;
		width: 90%;
		border-bottom: 1px solid #f2f2f2;
	}
	.noteInfo {
		display: flex;
		flex-direction: row;
	}
	.deleteButton {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 19px;
		width: 97px;
		height: 34px;
		border: 1px solid #ff3159;
		border-radius: 4px;
		font-family: ${light};
		color: #ff3159;
	}
	.name {
		color: #2b2f3e;
		font-family: "Open Sans";
		font-size: 16px;
		font-weight: 600;
		text-overflow: ellipsis;
		max-width: 280px;
		overflow: hidden;
	};
	.commentsNumber {
		display : flex;
		align-items : center;
		height: 22px;
		background-color: #27ccc0;
		border-radius: 11px;
		margin-left: 8px;
		padding-top: auto;
		padding-bottom: auto;
		padding-left: 8px;
		padding-right: 8px;
		color: #ffffff;
		font-family: "Open Sans";
		font-size: 13px;
		font-weight: bold;
	};
`

export default Items
