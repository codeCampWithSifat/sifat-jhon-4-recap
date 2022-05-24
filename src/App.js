import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import OrderReview from "./Components/OrderReview/OrderReview";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<OrderReview />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
