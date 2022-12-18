import React, { useEffect, useState } from 'react'

const Cartlist = ({cart}) => {

    const[CART,setCART] = useState([]) 

    useEffect(()=>{
        setCART(cart)
    },[cart])
  return (
    <div>
        {
            CART?.map((cartItem,cartIndex)=>{
               return (
                    <div>
                        <img src={cartItem.imageURL} width={300}/>
                        <p>Name:{cartItem.name} | Type:{cartItem.type}</p>
                        <p>Price:{cartItem.price}/-{cartItem.currency}</p>
                        
                    Quantity:{cartItem.quantity}<button 
                     onClick={()=>{
                        const _CART = CART.map((item,index)=>{
                           return cartIndex === index ? {...item,quantity :item.quantity-1} :item                             
                       })
                        setCART(_CART)
                   }}>-</button>
                    </div>
                )
            })
        }

        <p>Total: <span></span>
            {
                
                cart.map(item=>item.price*item.quantity).reduce((total,value)=>total+value,0)
                
            }
        </p>
    </div>
  )
}

export default Cartlist
