import React from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector , useDispatch } from 'react-redux'
import { json } from 'react-router-dom';
import { remove } from '../store/cartSlice';
function Cart() {
  const products = useSelector(state=>state.cart);

  const cartProducts = useSelector(state=>state.cart);
const dispatch = useDispatch();
  const removeToCart = (id)=>{
dispatch(remove(id))
  }
  const cards=products.map((product ,index)=>(
    
  
              <div className="card mb-3" key={index}>
                <div className="card-body" key={product.id}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div>
                      <img
        src={product.image}
        className="img-fluid rounded-3"
        alt="Shopping item"
        style={{ width: '65px' }}
      />
                      </div>
                      <div className="ms-3">
                        <h5>{product.title}</h5>
                      
                      
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                     
                      <div style={{ width: '80px' }}>
                        <h5 className="mb-0"> {product.price}</h5>
                      </div>
                      <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove</Button>
                    </div>
                  </div>
                </div>
              </div>
         

   ));
   




  return (
   <>
   
   <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }} >
<div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col">
      <div className="card">
        <div className="card-body p-4">
          <div className="row">
            <div className="col-lg-7">
              <h5 className="mb-3">
                <a href="#!" className="text-body">
                  <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                </a>
              </h5>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <p className="mb-1">Shopping cart</p>
                  <p className="mb-0">You have {cartProducts.length} items in your cart</p>
                </div>
                
              </div>

{cards}


     {/* Repeat similar card components for other items */}
     </div>
            <div className="col-lg-5">

</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  
   </>
  )
}

export default Cart