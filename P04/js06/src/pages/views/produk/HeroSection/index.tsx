const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 px-8 text-center">
      <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Temukan Produk Terbaik</h1>
      <p className="text-white/80 text-base mb-8 max-w-md mx-auto leading-relaxed">
        Ribuan produk berkualitas tersedia untuk memenuhi kebutuhan Anda.
      </p>
      <div className="flex justify-center gap-2 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Cari produk..."
          className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors">
          Cari
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
