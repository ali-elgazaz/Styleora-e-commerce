import { useEffect, useState } from "react";
import { getProducts } from "../api/products.api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts();

        if (isMounted) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);

        if (isMounted) {
          setError(
            err.response?.data?.error?.message ||
              "Failed to load products. Please try again.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading, error };
};

export default useProducts;
