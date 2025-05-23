import { useEffect, useState } from "react";
import Product from "./Product";

export default function Productslist(){
    const apiUrl="https://fakestoreapi.com/products";
    const [products,setProducts]=useState([]);
    const [categories,setCategories]=useState([])
    const allproduct=()=>{
        fetch(apiUrl).then(res=>res.json()).then(data=>setProducts(data))
    }
    const allcategories=()=>{
        fetch(`${apiUrl}/categories`).then(res=>res.json()).then(data=>setCategories(data))
    }
    const getcategory=(catname)=>{
        fetch(`${apiUrl}/category/${catname}`).then(res=>res.json()).then(data=>setProducts(data))

    }
    useEffect(()=>{
        allproduct()
        allcategories()
    },[])

    return(
        <>
        
        <div className="container">
        <h2 className="text-center p-4">
             categories
        </h2>
        <div className="text-center mb-4">
  <button onClick={() => allproduct()} className="btn btn-outline-secondary m-2 px-4">All</button>
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => getcategory(category)}
      className="btn btn-outline-secondary m-2 px-4 text-capitalize"
    >
      {category}
    </button>
  ))}
</div>


        <h2 className="text-center p-4">
            Our Products
        </h2>
            <div className="row g-4">
                {products.map((product)=>{
                    return (
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3" key={product.id}>
                    <div className="inner">
                        <Product product={product} showbutton={true} />
                    </div>
                         </div>
                    )
                    
                })}



             
        </div>
            
        </div>
        
        
        </>
    )
}