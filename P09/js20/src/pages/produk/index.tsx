import fetcher from "@/utlis/swr/fetcher";
import TampilanProduk from "@/views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, error, dan isLoading sudah benar

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default Kategori;
