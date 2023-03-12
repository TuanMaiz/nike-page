export const initialState = {
    name: "",
    searchTerm:"",
    cartID: "",
    quantity: 0
};
// state here is prevState
const reducer = (state, action) => {
    //Action  -> type, [data];
    switch (action.type) {
        case 'SET_SEARCH':
            return { // return new state
                ...state, // giữ nguyên mọi state trừ ...
                searchTerm: action.searchTerm
            }
        case 'SET_CART':
            return { // return new state
                ...state, // giữ nguyên mọi state trừ ...
                cartID: action.cartID
            }
        case 'SET_QUANTITY':
            return {
                ...state,
                quantity: action.quantity
            }
        case 'SET_CATEGORY_SLUG':
            return {
                ...state,
                categorySlug: action.categorySlug
            }
        case "SET_SORT_ORDER":
            return {
                ...state,
                sortOrder: action.sortOrder
            }
        
        default: // nếu không phải trong các event được định nghĩa thì trả về state cũ để ko crash app
            return state;
    }
}

export default reducer;