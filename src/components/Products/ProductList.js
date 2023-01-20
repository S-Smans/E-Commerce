import Product from "./Product";
import "./ProductList.css";

const ProductList = (props) => {
    return (
        <div className="product-list">
            <Product image={props.products[0].image} name={props.products[0].name} price={props.products[0].price}/>
            <Product image={props.products[1].image} name={props.products[0].name} price={props.products[0].price}/>
            <Product image={props.products[2].image} name={props.products[0].name} price={props.products[0].price}/>
        </div>
    );
}

export default ProductList;