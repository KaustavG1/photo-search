const initialState = {
    searchTerm: ""
};

function SearchReducer(state = initialState, action) {
    if(action.type === "ADD_SEARCHTERM") {
        state = { searchTerm: action.payload };
    }
    return state;
}

export default SearchReducer;