import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productAction";


 function ProductDetails() {
   const {productId} = useParams();
   const product = useSelector(state=> state.product);
   const { image, title, price, category, description } = product;
   const dispatch = useDispatch();
   const productDetails = async ()=> {
         const res = await fetch(`https://fakestoreapi.com/products/${productId}`).catch(err=> console.log("Err:" + err));
         const product = await res.json();
         dispatch(selectedProduct(product))
   }

   useEffect(()=> {
    productDetails();
    return ()=> dispatch(removeSelectedProduct());
   },[productId]) 
   
    return (
      <div className="product-details">
        <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
    );
  };
  
  export default ProductDetails;