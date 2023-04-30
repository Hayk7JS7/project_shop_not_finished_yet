
export const INITIAL_STATE = {
    show: false,
    showLoadMore: true,
    shopArr: [],
    payment: 0,
}

export const INITIAL_TYPE = {
    CHANGE_BUTTON_NAME: "change_btn_name",
    ADD_ITEM: "add_item",
    SHOP_ICON_HANDLE: "shop_icon_handle",
    OVERALL_PAYMENT: "overall_payment",
    DELETE_ITEM: "delete_item",
}

export const useReduce = (state, action) => {
    switch(action.type){
        case INITIAL_TYPE.CHANGE_BUTTON_NAME :{
            return {...state, showLoadMore: !state.showLoadMore}
        } 
        case INITIAL_TYPE.ADD_ITEM :{
            const isItemExists = state.shopArr.some(item => item.array.id === action.payload.array.id)
            if(!isItemExists){
                const newItem = [...state.shopArr, {array: action.payload.array}]
            return {...state, shopArr: newItem}
            } else {
            const deleteExistItem = state.shopArr.filter(item => item.array.id === action.payload.array.id)
            return {...state, shopArr: deleteExistItem}
            }
        }
        case INITIAL_TYPE.SHOP_ICON_HANDLE :{
            if(state.shopArr.length === 0){
                return {...state, show: false}
            } 
            return {...state, show: !state.show}
        }
        case INITIAL_TYPE.OVERALL_PAYMENT :{
            const payAmount = state.shopArr.reduce((aggr, val) =>{
                return aggr + val.array.price;
            }, 0)
            return {...state, payment: payAmount}
        }
        case INITIAL_TYPE.DELETE_ITEM :{
            const deleteExistItem = state.shopArr.filter(item => item.array.id !== action.payload.array.array.id)
            return {...state, shopArr: deleteExistItem}
        }

        
        default:
             return state
    }
}