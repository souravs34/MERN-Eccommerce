import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartScreen from "./Pages/CartScreen";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import ShippingScreen from "./Pages/ShippingScreen";
import PaymentScreen from "./Pages/PaymentScreen";
import PlaceOrder from "./Pages/PlaceOrder";
import OrderScreen from "./Pages/OrderScreen";
import UserListScreen from "./Pages/UserListScreen";
import UserEditScreen from "./Pages/UserEditScreen";
import ProductListScreen from "./Pages/ProductListScreen";
import ProductEditScreen from "./Pages/ProductEditScreen";
import OrderListScreen from "./Pages/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="py-3">
        <Container>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/register" exact>
            <RegisterScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/shipping">
            <ShippingScreen />
          </Route>
          <Route path="/payment">
            <PaymentScreen />
          </Route>
          <Route path="/placeorder">
            <PlaceOrder />
          </Route>
          <Route path="/order/:id">
            <OrderScreen />
          </Route>
          <Route path="/admin/userlist">
            <UserListScreen />
          </Route>
          <Route path="/admin/user/:id/edit">
            <UserEditScreen />
          </Route>
          <Route path="/admin/productlist">
            <ProductListScreen />
          </Route>
          <Route path="/admin/product/:id/edit">
            <ProductEditScreen />
          </Route>
          <Route path="/admin/orderlist">
            <OrderListScreen />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/cart/:id?">
            <CartScreen />
          </Route>
          <Route path="/search/:keyword">
            <HomePage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
