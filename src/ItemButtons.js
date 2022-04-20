import React from 'react';
import axios from 'axios';

export class ItemButtons extends React.Component {
	render() {
		const { title } = this.props;
		const { name } = this.props;
		
		const notify = () =>{
			const newBook = {
				name : name,
				title : title
			}
			axios.post('https://master.d1wocwlzyirb4e.amplifyapp.com:3001/', newBook);
			//console.log("success");
			window.open(this.props.link, "_blank");
			//<a href={this.props.link} target="_blank" rel="noopener noreferrer"></a>
		}
		return (
			<div className="item-buttons">
				{this.props.link ? (
					<button id='a' onClick={notify}>view</button>
				) : (
					<em>
						<small>no link</small>
					</em>
				)}
			</div>
		);
	}
}


