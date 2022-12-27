
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";

import Snavbar from "./Components/Snavbar";
import Store from "./Store/Store";
import { Provider } from "react-redux";
import Product from "./Pages/Product";

function App() {
  return (
    <div>
    <Provider store={Store}>
    <BrowserRouter>
      <Snavbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
      
    </div>
  );
}

export default App;
