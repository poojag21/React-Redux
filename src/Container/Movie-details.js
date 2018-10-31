import React, {Component} from 'react';
import {connect} from 'react-redux';

 class MovieDetail extends Component {
	render(){

		if(! this.props.movies){
			return  <div></div>
		}

		return(
			<div className ="list-group" >
				<img className="img-thumbnail" src={this.props.movies.cover}/>
				<div className ="list-group"/>
				<div className ="list-group" > Title: {this.props.movies.title}</div>
				<div className ="list-group"> Description : { this.props.movies.desc}</div>
				<div className ="list-group"> Main Characters :{ this.props.movies.Characters}</div>
				
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		movies : state.activemovie
	};
}
export default connect( mapStateToProps)(MovieDetail);