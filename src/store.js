import nominationdReducer from './reducers/nominationdReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    nominations: nominationsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store