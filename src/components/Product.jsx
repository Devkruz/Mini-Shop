import {Link} from "react-router-dom";

 function Product({product}) {
      const {image, title, price, category, id} = product;
    return (
        <div className="card-container">
          <Link style={{color:"black"}} to={`/product/${id}`}>
          <div className="card">
            <div className="image">
              <img src={image} alt={title}></img>
            </div>
            <div className="content">
              <h4 className="header"> {title} </h4>
              <h3 className=" price">$ {price}</h3>
              <div className="category">{category}</div>
            </div>
           </div>
         </Link>              
       </div>
     
    );
  }
  



  export default Product;