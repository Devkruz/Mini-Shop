import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../redux/actions/productAction";
import { useEffect } from "react";
 
 function ProductListing() {

  const products = useSelector(state=> state.allProducts.products);

  const dispatch = useDispatch();

  const getProduct = async () => {
       const res = await fetch('https://fakestoreapi.com/products').catch(err  => console.log("Err :", err));
       const product = await res.json();
       dispatch(setProducts(product));     
      };
      
      useEffect(()=> {
        getProduct();
      },[]);
      
  

 const ProductRendering = products.map(product => {
           return (
            <Product key = {product.id} product={product}/>
           )
    });


   return (
        
          <div className="Product-list">
           {ProductRendering}
          </div>
  
   );
 };
 
 export default ProductListing;