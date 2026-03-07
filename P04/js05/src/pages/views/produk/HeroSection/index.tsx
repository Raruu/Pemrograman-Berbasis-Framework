import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Cari Produk</h1>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Cari produk..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Cari</button>
      </div>
    </section>
  );
};

export default HeroSection;
