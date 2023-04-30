import React, { useContext, useEffect, useReducer } from 'react';
import { useItemContext } from '../../App'
import './Sugestion.css'
import { INITIAL_STATE, INITIAL_TYPE, useReducers } from './useReducerSuggestion';

const Sugestion = () => {
    const [state, dispatch] = useReducer(useReducers, INITIAL_STATE)
    const { data } = useContext(useItemContext)
    const searchArr = data.flat(Infinity)
    
    useEffect(() => {
        dispatch({type: INITIAL_TYPE.LOGICAL_INSTRUMENT})
    }, [state.selectValue, state.count])

    const onClick = () => {
        dispatch({type: INITIAL_TYPE.LOGICAL_INSTRUMENT})
    }

    useEffect(() => {
        if(state.searchBrand === "") return ;
        const timer = setTimeout(() => {
            dispatch({type: INITIAL_TYPE.FILTER_ARRAY_NAME, payload: {arrayFilterName: searchArr}})
        }, 1000);
        return (() => {
            clearTimeout(timer)
        })
    }, [state.searchBrand])

    const handleSelect = (e) => {
        dispatch({type: INITIAL_TYPE.CHANGE_SELECTED_VALUE, payload: {selectValue: e.target.value}})
    }

    const handleAmount = (e) => {
        dispatch({type: INITIAL_TYPE.COUNT_MONEY_FOR_FILTERING, payload: {count: e.target.value}})
    }

    const handleBrandName = (e) => {
        dispatch({type: INITIAL_TYPE.SEARCH_BRAND, payload: {brandName: e.target.value}})
    }

    return (
    <div className='suggest_container'>
        <div className='container_child'>
            <h4><span>Let find out what you are looking for</span></h4>
            <h5>Answer those questions</h5>
            <span>What you would like to buy</span>
        </div>
                <div className='container_child'>
                    <select value={state.selectValue} onChange={handleSelect} className='select'>
                        <option value="Phone">Phone</option>
                        <option value="Vexatious">Vexatious</option> 
                        <option value="Powerbank">Powerbank</option>   
                        <option value="HeadPhone">Headphone</option>            
                        <option value="Earbuds">Earbuds</option>            
                    </select>
                    <h4>Enter your intended budget</h4>
                    <input type="number" placeholder='amount...' value={state.count} onChange={handleAmount}/>
                    <button onClick={onClick}>generate</button>
                </div>
                <div className='container_child'>
                    {state.show && data.map(item => {
                        if(item[0].field === state.selectValue){
                            return item.map(itemInfo => {
                                if(itemInfo.price <= state.count){
                                    return (
                                        <div key={Math.random()} className='item'>
                                            <span>{itemInfo.title}</span>
                                            <h5>{itemInfo.price}$</h5>
                                        </div>
                                    )
                                }
                            })
                        }
                    })}
                </div>
        <div className='container_child'>
            <h4>if you have preferable variant you can check it here</h4>
            <input type="text" placeholder='enter name' value={state.searchBrand} onChange={handleBrandName}/>
        </div>
        {state.arrayFilterName && state.arrayFilterName.map(r => {
            return (
                <div key={Math.random()}>
                    <h3>{r.title}</h3>
                    <span>{r.price}$</span>
                    <h5>{r.description}</h5>
                </div>
            )
        })}
    </div>
  );
};

export default Sugestion;