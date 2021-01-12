const searchedMoviesReducer = (state = [], action) => {
    switch (action.type){
        case 'SET_SEARCHED_MOVIES':
            console.log(state)
            console.log(action.searchedMovies)
            return action.searchedMovies 
        default:
            return state
    }
        
}

export default searchedMoviesReducer