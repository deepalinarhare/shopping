import React from 'react'

const Products = ({product,addtoCart}) => {
  return (
    <div className='flex'>
      {
        product.map((productItem,productIndex)=>{
                return(
                    <div style={{width:"25%"}}>
                        <div className='product-item'>
                            <img src={productItem.imageURL} width="100%"/>
                            <p>{productItem.name} | {productItem.type}</p>
                            <p>Price:{productItem.price}/-{productItem.currency}</p>
                            <p>Color:{productItem.color} | Gender:{productItem.gender}</p>
                            <button onClick={()=>addtoCart(productItem)}>Add To Cart</button>
                        </div>
                    </div>
                )
        })
      }
    </div>
  )
}

export default Products
