export const shopReducer = (state = [], action) => {
    switch (action.type) {

    case "UPDATE_PRODUCT":
        return state.map(item=>{
            if (item.id === action.id) {
                return{
                    ...item,...action.update
                }
            }else{
                return item;
            }
        })
     case "GET_PRODUCT":
       return action.product
        default:
            return state;
    }
}
