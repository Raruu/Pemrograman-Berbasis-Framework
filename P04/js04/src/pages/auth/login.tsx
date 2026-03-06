import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // Simpan status login ke localStorage
    localStorage.setItem("isLoggedIn", "true");
    // Navigasi imperatif ke halaman produk setelah login
    push("/produk");
  };

  const handlerLogout = () => {
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      {/* Navigasi imperatif: Login → Produk */}
      <button onClick={handlerLogin}>Login</button>
      <br />
      <br />
      <button onClick={handlerLogout}>Logout / hapus session</button>
      <br />
      <br />
      {/* Navigasi Link: Login ↔ Register */}
      <Link href="/auth/register">Belum punya akun? Daftar di sini</Link>
    </div>
  );
};

export default HalamanLogin;
