import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="py-3">
        <Container>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
