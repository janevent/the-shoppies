
export default(state=[], action){
    switch(action.type){
        case 'ADD_NOMINATION':
            return [...state, action.nomination]
        case 'DELETE_NOMINATION':
            let ind = state.findIndex((e) => e.title === action.title);
            let first = state.slice(0, ind)
            let last = state.slice(ind + 1);
            return [...first, ...last]
        default:
            return state
    }
}