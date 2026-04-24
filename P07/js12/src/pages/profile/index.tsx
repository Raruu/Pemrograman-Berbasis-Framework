import Link from "next/link";

const ProfilePage = () => {
  return (
    <div>
      <h2>Profil</h2>
      <p>Nama: Hidayat Widi Saputra</p>
      <p>NIM: 2341720157</p>
      <Link href="/profile/edit">Edit Profil</Link>
    </div>
  );
};

export default ProfilePage;
