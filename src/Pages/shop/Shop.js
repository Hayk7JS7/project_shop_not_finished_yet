import React, { useContext, useEffect } from 'react'
import { shopContext } from '../products/items_products/Productitems' 
import './Shop.css'
import { INITIAL_TYPE } from '../products/items_products/Producitemsfunctions'

const Shop = () => {
    const {state, dispatch} = useContext(shopContext)

    useEffect(() => {
        dispatch({type: INITIAL_TYPE.OVERALL_PAYMENT})
    }, [state.shopArr.length])

  return (
    <div className='shop'>
        <div className='items'>
            {state.shopArr.map((item, i) => {
                return (
                    <div className='item' key={i}>
                        <span className='delete_span' onClick={() => dispatch({type: INITIAL_TYPE.DELETE_ITEM, payload: {array: item}})}>X</span>
                        <div className='name'><span>{item.array.title}</span></div> 
                        <img src={item.array.img} alt="img" />
                        <div className='price'>{item.array.price}$</div>
                    </div>
                )
            })}
            pay: {state.payment}$
        </div>
    </div>
  )
}

export default Shop