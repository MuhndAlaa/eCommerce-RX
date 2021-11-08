import { Link } from "react-router-dom"
import "./Product.css"
export default function Product(props){
    return(
        <Link className="product-link" to={`/product-details/${props.product.id}`}>
            <div className="product card d-flex flex-column justify-content-between p-3 shadow">
                <img src={props.product.image} className="card-img-top" alt={props.product.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.category}</p>
                </div>
                <h5 className="text-end text-success">Price : {props.product.price}EGP</h5>
            </div>
        </Link>
    )
}