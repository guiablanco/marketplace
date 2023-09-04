'use client'

import { Products } from "@/components/Products";
import { products as initialProducts } from '../mocks/products.json';
import { useState } from "react";

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useFilters from "@/hooks/useFilters";

export default function Home() {

  const {filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header/>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </>
  )
}
