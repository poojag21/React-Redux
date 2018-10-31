import React from 'react';
import {Component} from 'react';
import MovieList from '../Container/Movie-List';
import MovieDetail from '../Container/Movie-details';

export default class App extends Component {
  render() {
    return (
      <div>
      	<MovieList/>
      	<MovieDetail/>
      </div>
    );
  }
}
