import { useRouter } from "next/router";

const HalamanToko = () => {
  // const router = useRouter();
  // console.log(router);
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>Kategori: {slug ? slug[0] : "Semua Kategori"}</p>
      <p>Toko: {`${slug && slug[0] + "-" + slug[1]}`}</p>
      {/* <p>
        Toko: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug}
      </p> */}
    </div>
  );
};

export default HalamanToko;
