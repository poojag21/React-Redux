import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SelectMovie} from '../actions/index';
import {bindActionCreators} from 'redux';

class MovieList extends Component{
	renderlist(){
		return this.props.movies.map((movies) => {
			return (
			<li
			 key= {movies.title} 
			 onClick = {() => this.props.SelectMovie(movies)}
			 className = "list-group-item list-group-item-action list-group-item-light col-md-6"> 
			 { movies.title}
				</li>
			);
		}

		)
	}


	render(){
	   return (
	   		<ul className ="list-group col-md-15">
	   			{this.renderlist()}
	   		</ul>
	   )
	}
} 

function mapStateToProps(state){
	return {
		movies: state.movies
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({SelectMovie: SelectMovie}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);