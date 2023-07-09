import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Layout from "./components/Layout.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route  path="/" element={<ProductList/>} />
                <Route path="/cart" element={<Cart/>} />
            </Route>
        </Routes>
    );
};

export default App;
