const searchActionCreator = searchTerm => {
    return {
        type: "ADD_SEARCHTERM",
        payload: {
            searchTerm: searchTerm
        }
    };
}

export default searchActionCreator;