import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './scenes/homepage/Homepage';
import Shop from './scenes/shop/Shop';
import Navbar from './scenes/navbar/Navbar';
import ProductDetails from './scenes/product-details/ProductDetails';
import FormLogin from './scenes/form-login/FormLogin';
import FormRegister from './scenes/form-register/FormRegister';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/product-details/:id" component={ProductDetails}/>
        <Route path="/login" component={FormLogin}/>
        <Route path="/register" component={FormRegister}/>
      </Switch>
    </Router>
  );
}
