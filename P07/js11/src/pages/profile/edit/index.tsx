import Link from "next/link";

const ProfileEditPage = () => {
  return (
    <div>
      <h2>Edit Profil</h2>
      <form>
        <div>
          <label htmlFor="nama">Nama</label>
          <input id="nama" type="text" />
        </div>
        <div>
          <label htmlFor="nim">Nim</label>
          <input id="nim" type="nim" />
        </div>
        <button type="submit">Simpan</button>
      </form>
      <Link href="/profile">Kembali ke Profil</Link>
    </div>
  );
};

export default ProfileEditPage;
