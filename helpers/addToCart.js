import axios from "axios"
import { urlForThumbnail } from "./image"


export const addToCart = async (cart,product,err,success,dispatch) => {
    const exists = cart.cartItems.find(x => x._id == product._id)
    const quantity = exists ? exists.quantity+1:1
    const {data} = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
        err()
        return
    }
    dispatch({
        type:'ADD_TO_CART',
        payload:{
            _key: product._id,
            name:product.name,
            price:product.price,
            name:product.name,
            slug:product.slug.current,
            countInStock:product.countInStock,
            image:urlForThumbnail(product.images[0]),
            quantity
        }
    })
}