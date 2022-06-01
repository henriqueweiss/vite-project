import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Switch, //Garante que apenas uma rota esteja visível: Carta ou Cart
} from "react-router-dom";

import { Cart } from "./pages/Cart"
import { Catalog } from "./pages/Catalog"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    )
}