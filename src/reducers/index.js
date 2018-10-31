import { combineReducers } from 'redux';
import  MoviesReducer from './Reducer_MovieList';
import ActiveMovieReducer from './Reducer_ActiveMovie';


const rootReducer = combineReducers({
  movies: MoviesReducer,
  activemovie : ActiveMovieReducer
});

export default rootReducer;
