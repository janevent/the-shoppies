
export default(state=[], action){
    switch(action.type){
        case 'addNomination':
            return [...state, action.nomination]
        case 'deleteNomination':
            let ind = state.findIndex((e) => e.title === action.title);
            let first = state.slice(0, ind)
            let last = state.slice(ind + 1);
            return [...first, ...last]
        default:
            return state
    }
}