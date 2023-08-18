import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import AddProduct from "./components/AddProduct.jsx";
import EditProduct from "./components/EditProduct.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;