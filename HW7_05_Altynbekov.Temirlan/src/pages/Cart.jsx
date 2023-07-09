import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <h3>Корзина : </h3>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <h2>{item.title}</h2>
                        <p>Price: {item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
