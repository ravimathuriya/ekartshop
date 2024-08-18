import { addtocart } from "../constants"

export const addToCart = (data) => {

    return (dispatch) => {
        dispatch(
            {
                type: addtocart,
                data: data
            }
        )
    }

}