
const nominationsReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_NOMINATION':
            console.log(state)
            return [...state, action.nomination]
        case 'DELETE_NOMINATION':
            let ind = state.findIndex((e) => e.title === action.title);
            let first = state.slice(0, ind)
            let last = state.slice(ind + 1);
            console.log(state)
            return [...first, ...last]
        default:
            console.log(state)
            return state
    }
}

export default nominationsReducer