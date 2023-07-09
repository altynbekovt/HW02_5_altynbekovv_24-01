import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../components/toolkit/store/cartSlice";
import { fetchProducts } from "../components/toolkit/store/productSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const products = useSelector((state) => state.products.data.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };



    return (
        <div>
            <h3>Product List</h3>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>Price: {product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <Link to="/cart">Go to Cart ({cartItems.length})</Link>
        </div>
    );
};

export default ProductList;
