import { Routes, Route } from "react-router-dom";
import { Catalog } from "../pages/Catalog";
import { Basket } from "../pages/Basket";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
