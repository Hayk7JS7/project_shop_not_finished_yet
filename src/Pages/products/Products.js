import './Products.css'
import { useItemContext } from '../../App'
import React, { useContext, useState } from 'react'
import Productitems from '../products/items_products/Productitems'

export const useFieldNameContext = React.createContext()

const Products = () => {
  const [target, setTarget] = useState("") 
  const { data } = useContext(useItemContext)

  return (
      <div className='card'>
        {data.map((r, i) => {
         return <span key={i} className='field' onClick={(e) => setTarget(e.target.innerText)}>{r[0].field}</span>
        })}
        {target !== "" && <useFieldNameContext.Provider value={{target, data}}><Productitems/></useFieldNameContext.Provider>}
      </div>
  )
}

export default Products