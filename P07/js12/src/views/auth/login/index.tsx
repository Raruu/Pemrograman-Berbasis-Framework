import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const TampilLogin = () => {
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
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
      {/* Navigasi imperatif: Login → Produk */}
      <button onClick={handlerLogin}>Login</button>
      <br />
      <br />
      <button onClick={handlerLogout}>Logout / hapus session</button>
      <br />
      <br />
      <h1
        style={{
          color: "red",
          borderRadius: "10px",
          padding: "10px",
          border: "1px solid red",
        }}
      >
        Belum punya akun?
      </h1>
      <Link href="/auth/register">Daftar di sini</Link>
    </div>
  );
};

export default TampilLogin;
