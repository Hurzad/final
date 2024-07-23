export const addProduct = ({ photo, title, desc, price }) => {

}

export const deleteProduct = (id) => {

}

export const editProduct = (id,update) =>({
    type:"UPDATE_PRODUCT",
    id,update
})

export const getProduct = (product) => ({
    type: "GET_PRODUCT",
    product
})