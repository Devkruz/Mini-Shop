 import { Link } from 'react-router-dom';
 import React from 'react';
 
 export default function Header() {
   return (
     <div className="ui fixed menu">
        <div className="ui container center">
            <Link style={{color:"black"}} to={"/"}>
            <h2>Mini Shop</h2>
            </Link>
        </div>
     </div>
   );
 }
 