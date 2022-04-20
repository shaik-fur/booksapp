import React from 'react';
import { Item } from './Item';

export class Results extends React.Component {
	render() {
		const { searchResults } = this.props;
		//console.log(searchResults[1])
		let bookList = [];

		if (
			searchResults[0][0] &&
			searchResults[0][0].totalItems &&
			searchResults[0][0].items
		) {
			bookList = searchResults[0][0].items.map((book, index) => {
				return <Item key={index} book={book} name={searchResults[1]} />;
			});
		}

		return (
			<section id="results">
				<h2>Search Results</h2>
				<ul id="results-list" className="item-list">
					{!bookList.length ? 'No books found!' : <>{bookList}</>}
				</ul>
			</section>
		);
	}
}
