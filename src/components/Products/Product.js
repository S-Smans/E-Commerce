import "./Product.css";

const Product = (props) => {

    return (
        <div className="product">
            <img src={props.image} alt={props.name}/>
            <p className="title">{props.name}</p>
            <p className="price">{props.price}€</p>
        </div>
    )
}

export default Product;