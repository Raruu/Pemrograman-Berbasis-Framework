import { useRouter } from "next/router";

const HalamanKategori = () => {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;

  return (
    <div>
      <h1>Halaman Kategori</h1>
      {slug && slug.length > 0 ? (
        <ul>
          {slug.map((param, index) => (
            <li key={index}>
              Parameter {index + 1}: {param}
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada parameter URL.</p>
      )}
    </div>
  );
};

export default HalamanKategori;
