import React, { useContext, useEffect, useReducer } from 'react'
import { useFieldNameContext } from '../Products'
import './Productitems.css'
import Shop from '../../shop/Shop'
import shopicon from '../../../assets/shopicon.svg'
import {  useReduce, INITIAL_STATE, INITIAL_TYPE } from './Producitemsfunctions'

export const shopContext = React.createContext()

const Productitems = () => {
    const { target, data } = useContext(useFieldNameContext)
    const [state, dispatch] = useReducer(useReduce, INITIAL_STATE)

    const handClick = () => {
        dispatch({type: INITIAL_TYPE.CHANGE_BUTTON_NAME})
    }

    const imgHandle = (r) => {
        dispatch({type: INITIAL_TYPE.ADD_ITEM, payload: {array: r}})
    }

    const shopIconHandle = () => {
        dispatch({type: INITIAL_TYPE.SHOP_ICON_HANDLE})
    }

  return (
        <div className='Items_Parent'>    
            <div className='nm'><img src={shopicon} alt="icon" width="80px" height="80px" onClick={shopIconHandle} />{state.shopArr.length}</div>
            {!state.show ? 
            <>
            <div className='items'>
                {data.map(r => {
                        if(r[0].field === target){
                                return r.map((r, i) => {
                                    if(i < 5 || (!state.showLoadMore && i < 10)){
                                        return (
                                            <div key={i} className='item_parent'>
                                                <div className='item_child'>
                                                    <img src={r.addSvg} alt="ref" className='svg_shop' onClick={() => imgHandle(r)}/>
                                                    <h4>{r.title}</h4>
                                                    <img src={r.img} alt="img" className='img'/>
                                                    <p className='price'>{r.price}$</p>
                                                    <span className='description_item'>{r.description}</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        return null
                    })
                }
            </div>
                <button className='btn' onClick={handClick}>{state.showLoadMore ? "load more..." : "show less"}</button>
            </>
            : 
            <div className='shop'>
                <shopContext.Provider value={{state, dispatch}}>
                    <Shop/>
                </shopContext.Provider>
            </div>
            }
        </div>
  )
}

export default Productitems