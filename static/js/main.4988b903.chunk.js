(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n.p+"static/media/OpenSans-Light.1bf71be1.ttf"},21:function(t,e,n){t.exports=n(37)},27:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(10),r=n.n(i),c=(n(27),n(2)),s=n(16),d=n(1),p=n(3),l=n(4),m=n(7),f=n(5),u=n(8),x=n(6),g=n(9),h=n.n(g),b=n(11);function N(){var t=Object(c.a)(["\n\tmargin-left: 32px;\n\tmargin-top: 34px;\n\tpadding-bottom: 8px;\n\tborder: 1px solid #f2f2f2;\n\tbackground-color: #ffffff;\n\tbox-shadow: 0.5px 0.5px 3px #ccc;\n\twidth: 479px;\n\t.itemsTitle {\n\t\tcolor: #565a69;\n\t\tpadding-bottom: 16px;\n\t\tfont-family: ",';\n\t\tfont-size: 36px;\n\t\tfont-weight: 300;\n\t\tmargin-top: 8px;\n\t\tmargin-right: 14px;\n\t\tmargin-left: 25px;\n\t}\n\t.row {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\t.itemsInput {\n\t\twidth: 290px;\n\t\tmargin-right: 11px;\n\t\tmargin-left: 25px;\n\t\tpadding-top: 7px;\n\t\tpadding-left: 10px;\n\t\tpadding-bottom: 8px;\n\t\tpadding-right: 10px;\n\t\tborder: 1px solid #cccccc;\n\t\tborder-radius: 4px;\n\t\tfont-family: "Open Sans";\n\t\tfont-size: 16px;\n\t}\n\t.addButton {\n\t\tdisplay: flex;\n\t\twidth: 133px;\n\t\tpadding-top: 7px;\n\t\tpadding-bottom: 8px;\n\t\tmargin-right: 14px;\n\t\tbackground-color: #27ccc0;\n\t\tfont-family: "Open Sans";\n\t\tfont-weight: 600;\n\t\tcolor: #ffffff;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tborder-radius: 4px;\n\t\tfont-family: "Open Sans";\n\t\tfont-size: 16px;\n\t}\n\t.itemsInput::placeholder {\n\t\tcolor: #b3b3b3;\n\t}\n\t.notesContainer {\n\t\tmargin-top: 9px;\n\t\twidth: 100%;\n\t}\n\t.pickedNote {\n\t\tmargin-left: -3px;\n\t\tborder-left: 5px solid #ff2f5a;\n\t\tpadding-left: 29px;\n\t};\n\t.notPickedNote {\n\t\tpadding-left: 31px;\n\t}\n\t.note {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding-top: 16px;\n\t\tpadding-bottom: 16px;\n\t\tjustify-content: space-between;\n\t\tflex-direction: row;\n\t\tposition: relative;\n  \tz-index: 1;\n\t};\n\t.note:before {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tleft: 6%;\n\t\tbottom: 0;\n\t\theight: 1px;\n\t\twidth: 90%;\n\t\tborder-bottom: 1px solid #f2f2f2;\n\t}\n\t.noteInfo {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\t.deleteButton {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin-right: 19px;\n\t\twidth: 97px;\n\t\theight: 34px;\n\t\tborder: 1px solid #ff3159;\n\t\tborder-radius: 4px;\n\t\tfont-family: ',';\n\t\tcolor: #ff3159;\n\t}\n\t.name {\n\t\tcolor: #2b2f3e;\n\t\tfont-family: "Open Sans";\n\t\tfont-size: 16px;\n\t\tfont-weight: 600;\n\t};\n\t.commentsNumber {\n\t\tdisplay : flex;\n\t\talign-items : center;\n\t\theight: 22px;\n\t\tbackground-color: #27ccc0;\n\t\tborder-radius: 11px;\n\t\tmargin-left: 8px;\n\t\tpadding-top: auto;\n\t\tpadding-bottom: auto;\n\t\tpadding-left: 8px;\n\t\tpadding-right: 8px;\n\t\tcolor: #ffffff;\n\t\tfont-family: "Open Sans";\n\t\tfont-size: 13px;\n\t\tfont-weight: bold;\n\t};\n']);return N=function(){return t},t}var w=n(13),v=function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(m.a)(this,Object(f.a)(e).call(this,t))).addNote=Object(b.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.state.newNoteName.length>0&&(n.props.addNote({name:n.state.newNoteName,comments:[]}),n.setState({newNoteName:""}));case 1:case"end":return t.stop()}},t,this)})),n.deleteNote=function(t){n.props.deleteNote(t)},n.pickNote=function(t){n.props.pickNote(t)},n.state={newNoteName:""},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(k,null,a.a.createElement("div",null,a.a.createElement("div",{className:"itemsTitle"},"Items"),a.a.createElement("div",{className:"row"},a.a.createElement("input",{value:this.state.newNoteName,className:"itemsInput",onChange:function(e){return t.setState({newNoteName:e.target.value})},placeholder:"Type name here..."}),a.a.createElement("div",{onClick:function(){return t.addNote()},className:"addButton"},"Add new"))),a.a.createElement("div",{className:"notesContainer"},this.props.notes.map(function(e,n){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{onClick:function(){return t.pickNote(n)},key:n,className:t.props.pickedNote===n?"note pickedNote":"notPickedNote note"},a.a.createElement("div",{className:"noteInfo"},a.a.createElement("div",{className:"name"},e.name),a.a.createElement("div",{className:"commentsNumber"},e.comments.length)),a.a.createElement("div",{onClick:function(){return t.deleteNote(n)},className:"deleteButton"},"Delete")),a.a.createElement("div",{className:"divider"}))})))}}]),e}(o.Component),k=x.a.div(N(),w,w),y=v;function O(){var t=Object(c.a)(["\n\twidth: 444px;\n\tmargin-left: 20px;\n\tmargin-top: 34px;\n\tpadding-top: 8px;\n\tpadding-left: 18px;\n\tpadding-right: 19px;\n\tpadding-bottom: 14px;\n\tborder: 1px solid #f2f2f2;\n\tbackground-color: #ffffff;\n\tbox-shadow: 0.5px 0.5px 3px #ccc;\n\t.commentsTitle {\n\t\tcolor: #565a69;\n\t\tpadding-bottom: 16px;\n\t\tfont-family: ",';\n\t\tfont-size: 36px;\n\t\tfont-weight: 300;\n\t}\n\t.row {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tpadding-bottom: 20px;\n\t\tpadding-top: 14px;\n\t\tposition: relative;\n  \tz-index: 1;\n\t}\n\t.row:before {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\theight: 1px;\n\t\twidth: 95%;\n\t\tborder-bottom: 1px solid #f2f2f2;\n\t}\n\t.addCommentRow {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tpadding-top: 14px;\n\t}\n\t.picture {\n\t\twidth: 52px;\n\t\theight: 52px;\n\t\tmargin-right: 14px;\n\t}\n\t.oddPicture {\n\t\tbackground-color: #ff8a00;\n\t}\n\t.evenPicture {\n\t\tbackground-color: #47568c;\n\t}\n\t.commentPicture {\n\t\tbackground-color: #e6e6e6;\n\t}\n\t.commentText {\n\t\tcolor: #666666;\n\t\tfont-family: "Open Sans";\n\t\tfont-size: 12px;\n\t\twidth: 341px;\n\t}\n\t.commentInput {\n\t\twidth: 341px;\n\t\tword-break: break-word;\n\t\tborder: 1px solid #cccccc;\n\t\tfont-family: "Open Sans";\n\t\tfont-size: 12px;\n\t\tcolor: #666666;\n\t}\n']);return O=function(){return t},t}var j=n(13),E=function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(m.a)(this,Object(f.a)(e).call(this,t))).handlePress=function(t){"Enter"===t.key&&(t.ctrlKey||t.metaKey)&&(n.props.addComment(n.state.newComment),n.setState({newComment:""}))},n.state={newComment:""},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(C,null,a.a.createElement("div",{className:"commentsTitle"},"Comments #",this.props.pickedNote+1),this.props.comments.map(function(t,e){return a.a.createElement("div",{key:e,className:"row"},a.a.createElement("div",{className:e%2?"picture evenPicture":"picture oddPicture"}),a.a.createElement("div",{className:"commentText"},t))}),a.a.createElement("div",{className:"addCommentRow"},a.a.createElement("div",{className:"picture commentPicture"}),a.a.createElement("textarea",{rows:"5",className:"commentInput",onKeyPress:function(e){return t.handlePress(e)},onChange:function(){var e=Object(b.a)(h.a.mark(function e(n){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.setState({newComment:n.target.value}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),value:this.state.newComment})))}}]),e}(o.Component),C=x.a.div(O(),j),S=E;function P(){var t=Object(c.a)(["\n  display: flex;\n\tflex-direction: row;\n\tbackground-color: #f9f9f9;\n\t.leftBar {\n\t\tpadding-left: 27px;\n\t\tpadding-right: 40px;\n\t\tpadding-top: 16px;\n\t\twidth: 271px;\n\t\tbackground-color: #2b2f3e;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t};\n\t.appTitle {\n\t\ttext-transform: uppercase;\n\t\tcolor: #ffffff;\n\t\tfont-family: ",';\n\t\tfont-weight: 200;\n\t\tfont-size: 36px;\n\t};\n\t.subTitle {\n\t\tcolor: #808080;\n\t\tfont-family: "Open Sans";\n\t\tfont-size: 18px;\n\t};\n']);return P=function(){return t},t}var z=n(13),I=function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(m.a)(this,Object(f.a)(e).call(this,t))).addNote=function(t){n.setState(Object(d.a)({},n.state,{notes:[].concat(Object(s.a)(n.state.notes),[t])}))},n.deleteNote=function(t){t<n.state.pickedNote?n.setState(Object(d.a)({},n.state,{pickedNote:n.state.pickedNote-1})):t===n.state.pickedNote&&n.setState(Object(d.a)({},n.state,{pickedNote:0}));var e=n.state.notes;e.splice(t,1),n.setState(Object(d.a)({},n.state,{notes:e}))},n.addComment=function(t){var e=n.state.notes[n.state.pickedNote],o=[].concat(Object(s.a)(e.comments),[t]);e=Object(d.a)({},e,{comments:o});var a=n.state.notes;a.splice(n.state.pickedNote,1,e),n.setState(Object(d.a)({},n.state,{notes:a}))},n.saveChanges=function(){localStorage.setItem("notes",JSON.stringify(n.state.notes))},n.state={notes:JSON.parse(localStorage.getItem("notes"))||[],pickedNote:0},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(t,e,n){this.saveChanges()}},{key:"render",value:function(){var t=this;return a.a.createElement(T,null,a.a.createElement("div",{className:"leftBar"},a.a.createElement("div",{className:"appTitle"},"DAIRY APP"),a.a.createElement("div",{className:"subTitle"},"Comment with no sense")),a.a.createElement(y,{notes:this.state.notes,pickedNote:this.state.pickedNote,deleteNote:function(e){return t.deleteNote(e)},addNote:function(e){return t.addNote(e)},pickNote:function(e){return t.setState({pickedNote:e})}}),a.a.createElement(S,{comments:this.state.notes[this.state.pickedNote]?this.state.notes[this.state.pickedNote].comments:[],pickedNote:this.state.pickedNote,addComment:function(e){return t.addComment(e)}}))}}]),e}(o.Component),T=x.a.div(P(),z),B=I;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.4988b903.chunk.js.map