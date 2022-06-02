// import { useEffect, useState } from "react";
import { supabase } from "../components/Utils/supabaseClient";
const useProducts = async () => {
  const { data } = await supabase.from("products").select("*");

  return data;
};

export default useProducts;

// const useProducts = async () => {
//   const [products, setProducts] = useState([]);
//   const [images, setImages] = useState([]);

//   const fetch_products = async () => {
//     const response = await supabase.from("products").select("*");
//     console.log(response.data);
//     setProducts(response.data);
//   };

//   useEffect(() => {
//     (async () => {
//       await fetch_products();
//     })();
//   }, []);
// };
// export default useProducts;
