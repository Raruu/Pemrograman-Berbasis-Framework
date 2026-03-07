import Link from "next/link";
import styles from "./mainSection.module.css";

interface Produk {
  nama: string;
  harga: number;
  kategori: string;
}

const daftarProduk: Produk[] = [
  { nama: "Sepatu Lari Pro", harga: 450000, kategori: "Olahraga" },
  { nama: "Tas Ransel Casual", harga: 320000, kategori: "Fashion" },
  { nama: "Headphone Wireless", harga: 750000, kategori: "Elektronik" },
  { nama: "Jaket Waterproof", harga: 580000, kategori: "Fashion" },
  { nama: "Buku Pemrograman", harga: 125000, kategori: "Edukasi" },
  { nama: "Smartwatch", harga: 1200000, kategori: "Elektronik" },
];

const formatHarga = (harga: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(harga);

const MainSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Semua Produk</h2>
      <div className={styles.grid}>
        {daftarProduk.map((produk, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>Gambar</div>
            <div className={styles.cardBody}>
              <p className={styles.cardName}>{produk.nama}</p>
              <p className={styles.cardPrice}>{formatHarga(produk.harga)}</p>
              <span className={styles.cardCategory}>{produk.kategori}</span>
              <Link href={`/produk/${index}`} className={styles.buyButton}>
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
