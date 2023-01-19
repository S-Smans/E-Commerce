import "./Product.css";

const Product = (props) => {

    return (
        <div className="product">
            {props.products.map(product => {
                return <img src={product.image} />
            })}
        </div>
    )
}

export default Product;