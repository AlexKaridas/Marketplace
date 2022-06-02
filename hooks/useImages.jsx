import { supabase } from "../components/Utils/supabaseClient";
const useImages = async () => {
  const { publicUrl } = await supabase.storage
    .from("products")
    .getPublicUrl("product-images/nft1.png");

  return publicUrl;
};

export default useImages;
