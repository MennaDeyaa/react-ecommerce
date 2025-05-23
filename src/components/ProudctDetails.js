import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductDetails() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  return (
    <div className="container py-5">
      {/* <h2 className="text-center mb-4">Product Details</h2>
      <div className="row justify-content-center">
        <div className="col-md-4"> */}
          <Product product={product} showbutton={false} />
        {/* </div>
      </div> */}
    </div>
  );
}
