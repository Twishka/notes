import React, { Component } from 'react';
import styled from 'styled-components';
import Items from './components/Items';
import Comments from './components/Comments';

const light = require('./assets/fonts/OpenSans-Light.ttf')

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: JSON.parse(localStorage.getItem('notes')) || [],
			pickedNote: 0,
		}
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.saveChanges()
	}

	render() {
    return (
      <AppBase>
				<div className="leftBar">
					<div className="appTitle">DAIRY APP</div>
					<div className="subTitle">Comment with no sense</div>
				</div>
				<Items
					notes={this.state.notes}
					pickedNote={this.state.pickedNote}
					deleteNote={index => this.deleteNote(index)}
					addNote={newNote => this.addNote(newNote)}
					pickNote={pickedNote => this.setState({pickedNote})}
				/>
				<Comments
					comments={this.state.notes[this.state.pickedNote] ? this.state.notes[this.state.pickedNote].comments : []}
					pickedNote={this.state.pickedNote}
					addComment={comment => this.addComment(comment)}
				/>
			</AppBase>
    );
  }
  
  addNote = newNote => {
		this.setState({...this.state, notes: [...this.state.notes, newNote]})
	}
	
  deleteNote = index => {
		if (index < this.state.pickedNote) {
			this.setState({...this.state, pickedNote: this.state.pickedNote - 1})
		} else if (index === this.state.pickedNote) {
			this.setState({...this.state, pickedNote: 0})
		}
		let notes = this.state.notes
		notes.splice(index, 1)
		this.setState({...this.state, notes})
	}
	
	addComment = comment => {
		let updatedNote = this.state.notes[this.state.pickedNote]
		const comments = [...updatedNote.comments, comment]
		updatedNote = {...updatedNote, comments}
		const newNotes = this.state.notes
		newNotes.splice(this.state.pickedNote, 1, updatedNote)
		this.setState({...this.state, notes: newNotes})
	}
  
	saveChanges = () => {
		localStorage.setItem('notes', JSON.stringify(this.state.notes))
	}
}

const AppBase = styled.div`
  display: flex;
	flex-direction: row;
	background-color: #f9f9f9;
	.leftBar {
		padding-left: 27px;
		padding-right: 40px;
		padding-top: 16px;
		width: 271px;
		background-color: #2b2f3e;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	};
	.appTitle {
		text-transform: uppercase;
		color: #ffffff;
		font-family: ${light};
		font-weight: 200;
		font-size: 36px;
	};
	.subTitle {
		color: #808080;
		font-family: "Open Sans";
		font-size: 18px;
	};
`

export default App;
