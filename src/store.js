import nominationsReducer from './reducers/nominationsReducer';
import setSearchedMovies from './reducers/setSearchedMovies';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    nominations: nominationsReducer,
    searchedMovies: setSearchedMovies
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store