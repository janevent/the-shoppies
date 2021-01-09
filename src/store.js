import nominationsReducer from './reducers/nominationsReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    nominations: nominationsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store