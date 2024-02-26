import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { NewProduct } from "./pages/NewProduct";

export function App() {
    return (
        <BrowserRouter>
            <Header />
            
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/new-product" element={<NewProduct />} />
            </Routes>
            
            <Footer />
        </BrowserRouter>
    );
}
