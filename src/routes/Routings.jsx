import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Products from '../components/pages/Products';
import ProductDetail from '../components/pages/ProductDetail';
import OrderPlaced from '../components/pages/OrderPlaced';
import Cart from '../components/pages/Cart';
import Checkout from '../components/pages/Checkout';
import Footer from '../components/Footer';
import NotFound from '../components/pages/NotFound';

const Routings = () => (
  <Router>
    <main>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/productDetail' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orderPlaced' element={<OrderPlaced />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  </Router>
);

export default Routings;
