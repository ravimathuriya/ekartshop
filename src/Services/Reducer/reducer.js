import {addtocart} from "../constants"

const reducer = (state=[], action) =>{

    if(action.type === addtocart){
        return state.concat(action.data)
         
    }
    else{
        return state
    }

}

export default reducer