const setSearchedMovies = (state = [], action) => {
    switch (action.type){
        case 'SET_SEARCHED_MOVIES':
            return action.searchedMovies 
        default:
            return state
    }
        
}

export default setSearchedMovies