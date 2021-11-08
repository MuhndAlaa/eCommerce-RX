import { useEffect, useState  } from "react";
import { Spinner } from "react-bootstrap";
import Product from "../product/Product";

export default function Shop(){

    const [products , setProducts] = useState([]);
    
    function fetchProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{setProducts(json)})
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return(
        <section className="container py-5 mt-5">
            <div className="row">
                {   products.length > 0 ?
                    products.map((product)=>(
                        <div key={product.id}  className="col-md-3 mb-3">
                            <Product product={product}/>
                        </div>
                    ))
                    :
                    <div className="spinner">
                        <Spinner className="mt-5" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                }
            </div>
        </section>
    )
}