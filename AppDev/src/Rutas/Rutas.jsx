import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
function Rutas({ data }) {
  return (
    <Routes>
      {/* <Route element={<RutasPublicas />}>
        <Route path="/login" element={<LoginDataset />} />
        <Route path="/registro" element={<Registro />} />
      </Route> */}

      <Route path="/" element={<Sidebar />}>
        {/* <Route path="chat" element={<Chat />} />
        <Route path="products" element={<ProductsFilter />} />
        <Route path="products/validate" element={<ProductsValidate />} />*/}
      </Route> 
    </Routes>
  );
}

export default Rutas;
