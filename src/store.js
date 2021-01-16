import nominationsReducer from './reducers/nominationsReducer';
import searchedMoviesReducer from './reducers/searchedMoviesReducer';
import moviesReviewsReducer from './reducers/moviesReviewsReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    nominations: nominationsReducer,
    searchedMovies: searchedMoviesReducer,
    reviews: moviesReviewsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store