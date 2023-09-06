'use client'

import { Products } from "@/components/Products";
import { products as initialProducts } from '../mocks/products.json';

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useFilters from "@/hooks/useFilters";
import Cart from "@/components/Cart";

export default function Home() {

  const {filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </>
  )
}
