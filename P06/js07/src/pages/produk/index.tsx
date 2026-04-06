/* eslint-disable react-hooks/set-state-in-effect */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  const fetchProducts = () => {
    setLoading(true);
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Daftar Produk</h1>
        <button
          onClick={fetchProducts}
          disabled={loading}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Loading..." : "Refresh Data"}
        </button>
      </div>
      {products.map((products: ProductType) => (
        <div key={products.id}>
          <h2>{products.name}</h2>
          <p>Harga: {products.price}</p>
          <p>Ukuran: {products.size}</p>
          <p>Kategori: {products.category}</p>
          <div className="h-8"></div>
        </div>
      ))}
    </div>
  );
};

export default Kategori;
