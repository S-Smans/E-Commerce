import ProductList from './components/Products/ProductList';
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      image: "../images/Blue_Tshirt.jpg",
      name: "Blue T-Shirt",
      price: 15
    },
    {
      id: 1,
      image: "../images/Blue_Jeans.jpg",
      name: "Blue Jeans",
      price: 24
    },
    {
      id: 1,
      image: "../images/Black_Hoodie.jpg",
      name: "Black Hoodie",
      price: 45
    }
  ]

  return (
    <div className="App">
      <ProductList products={products}/>
    </div>
  );
  // TODO

  // 1 Create a product list that will have multiple products
}

export default App;
