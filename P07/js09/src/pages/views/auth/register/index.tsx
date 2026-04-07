import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.css";

const HalamanRegister = () => {
  const { push } = useRouter();

  const handlerRegister = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    push("/auth/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Buat Akun</h1>
        <form className={styles.form} onSubmit={handlerRegister}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Nama Lengkap
            </label>
            <input
              id="name"
              type="text"
              placeholder="Masukkan nama lengkap"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Buat password"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="confirmPassword">
              Konfirmasi Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Ulangi password"
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Daftar
          </button>
        </form>

        <p className={styles.footer}>
          Sudah punya akun?{" "}
          <Link href="/auth/login" className={styles.link}>
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HalamanRegister;
