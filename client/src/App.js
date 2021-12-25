import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartScreen from "./Pages/CartScreen";
import LoginScreen from "./Pages/LoginScreen";
const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="py-3">
        <Container>
          <Route path="/signin">
            <LoginScreen />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/cart/:id?">
            <CartScreen />
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
