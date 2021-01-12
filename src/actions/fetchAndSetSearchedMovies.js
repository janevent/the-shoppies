const setSearchedMovies = (movies) => {
    return {
        type: 'SET_SEARCHED_MOVIES',
        searchedMovies: movies
    }
}

const fetchAndSetSearchedMovies = (term) => {
    return (dispatch) => {
        fetch(`http://www.omdbapi.com/?s=${term}&apikey=3fe99504`)
        .then(response => response.json())
        .then(thisjson => {
            //use redux and thunk
            console.log("response", thisjson)
            if(thisjson.Response === "true"){
                dispatch(setSearchedMovies(thisjson.Search))
            }
        })
    }
}

export default fetchAndSetSearchedMovies