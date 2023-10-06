import React from 'react'
import { useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProducts } from '../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';

function Product() {
  const dispatch = useDispatch();
    
     const {data:products} = useSelector(state=> state.products);
    useEffect(()=>{


dispatch(getProducts());
    },[]);

    const addToCart=(product) =>{
     
dispatch(add(product))

    }
const cards=products.map((product ,index)=>(
  
  <div className="card col-md-3" key={index}>
  
  
    
<Card style={{ width: '18rem' }} key={product.id}>
<div className="text-center">
  <Card.Img variant="top" src={product.image} style={{height:'130px',width:'100px'}}/>
  </div>
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      {product.price}
    </Card.Text>
  
  </Card.Body>
  <Card.Footer>
  <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
  </Card.Footer>
</Card>
  </div>
))




  return (
    <div className='container'>
      <div className="row ">
        
        
           {cards}
      </div>
        </div>
  )
}

export default Product