import { combineReducers } from 'redux';
import searchedItemReducer from './reducer_searched_item';
import searchHistoryReducer from './reducer_search_history';

const rootReducer = combineReducers({
    searchHistory:searchHistoryReducer,
    searchedItem:searchedItemReducer});

export default rootReducer;
