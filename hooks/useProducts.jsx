import { supabase } from "../components/Utils/supabaseClient";
const useProducts = async () => {
  const { data } = await supabase.from("products").select("*");

  return data;
};

export default useProducts;
