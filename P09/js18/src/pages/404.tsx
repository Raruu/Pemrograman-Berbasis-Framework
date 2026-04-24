/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/404.module.scss";
import Head from "next/head";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <Head>
        <title>404 Tidak Ditemukan</title>
      </Head>
      <h1 className={styles.error__title}>404</h1>
      <img
        src="/kei-404.png"
        alt="404 Illustration"
        className={styles.error__image}
      />
      <p className={styles.error__description}>
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>
      <Link href="/" className={styles.error__button}>
        Kembali ke Home
      </Link>
    </div>
  );
};

export default Custom404;
