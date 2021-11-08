import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import "./ProductDetails.css"

export default function ProductDetails(){

    const [product , setProduct] = useState(null);
    const {id} = useParams();

    function fetchProduct(){
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>{setProduct(json)});
    }

    useEffect(()=>{
        fetchProduct();
        // eslint-disable-next-line
    },[])

    return(
        <>
            {
                product ?
                    <section className="product-details card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.category}</p>
                                    <p className="card-text">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <section className="spinner">
                        <Spinner className="mt-5" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </section>
            }
        </>
    )
}