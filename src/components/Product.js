import { Link } from "react-router-dom"

export default function Product(props){
    const {product , showbutton}=props
    return(
        <>
        <div className="card h-100" style={{ width: '18rem' }}>
                          <img src={product.image} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} alt={product.title}/>
                          <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
<p className="card-text">
   {(product.description && product.description.length > 100)
    ? product.description.slice(0, 100) + "..."
    : product.description || "Loading description..."}
</p>                          <p>price: {product.price}$</p>
                          {showbutton && <Link className="btn btn-primary" to={`products/${product.id}`}>Details</Link>}
                          
                         </div>
                        </div>
        </>
    )
}