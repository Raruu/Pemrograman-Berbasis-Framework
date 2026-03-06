import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Produk = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLogin) {
  //     router.push("/auth/login");
  //   }
  // }, []);

  return <div>Produk User Page</div>;
};

export default Produk;
