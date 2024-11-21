"use client";
import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar/page.js";
import Discover from "./Components/Discoverpage/page.js";
import Rectangle from "./Components/Rectangle/page.js";
import Product from "./Components/Product/page.js";
import Footer  from  "./Components/Footere/page.js"

function Page() {
  const [ispen, setIspen] = useState(true);
  return (
    <div>
      <Navbar />
      <Discover />
      <Rectangle ispen={ispen} setIspen={setIspen} />
      <Product ispen={ispen} setIspen={setIspen} />
      <Footer/>
    </div>
  );
}
export default Page;
