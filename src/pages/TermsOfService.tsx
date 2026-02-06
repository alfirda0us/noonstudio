import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Syarat & Ketentuan - NOON STUDIO™";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-light text-foreground mb-4">Syarat & Ketentuan</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: 1 Februari 2024</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Persetujuan Syarat</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dengan mengakses dan menggunakan website dan layanan NOON STUDIO™, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan dalam perjanjian ini. Syarat & Ketentuan ini mengatur penggunaan Anda atas website, produk, dan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Lisensi Penggunaan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Izin diberikan untuk mengunduh sementara satu salinan materi di website NOON STUDIO™ hanya untuk penggunaan pribadi, non-komersial. Ini adalah pemberian lisensi, bukan transfer kepemilikan, dan di bawah lisensi ini Anda tidak boleh:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Memodifikasi atau menyalin materi</li>
                <li>Menggunakan materi untuk tujuan komersial atau tampilan publik apa pun</li>
                <li>Mencoba merekayasa balik perangkat lunak apa pun yang ada di website</li>
                <li>Menghapus hak cipta atau notasi kepemilikan lainnya dari materi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Informasi Produk dan Ketersediaan</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami berusaha menyediakan informasi produk yang akurat, termasuk deskripsi, harga, dan ketersediaan. Namun, kami tidak menjamin bahwa deskripsi produk atau konten lainnya akurat, lengkap, dapat diandalkan, atau bebas dari kesalahan. Kami berhak untuk memodifikasi atau menghentikan produk tanpa pemberitahuan sebelumnya.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Pesanan dan Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Penerimaan Pesanan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Semua pesanan tunduk pada penerimaan dan ketersediaan. Kami berhak untuk menolak atau membatalkan pesanan apa pun dengan alasan apa pun, termasuk namun tidak terbatas pada ketersediaan produk, kesalahan dalam informasi produk, atau dugaan penipuan.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Ketentuan Pembayaran</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pembayaran jatuh tempo pada saat pembelian. Kami menerima transfer bank, e-wallet, dan metode pembayaran lain yang ditampilkan saat checkout. Semua harga dalam Rupiah Indonesia (IDR) kecuali disebutkan sebaliknya.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Pengiriman dan Pengantaran</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami akan berusaha sebaik mungkin untuk mengirim pesanan dalam jangka waktu yang ditentukan. Namun, tanggal pengiriman adalah perkiraan dan kami tidak bertanggung jawab atas keterlambatan yang disebabkan oleh kurir pengiriman atau keadaan di luar kendali kami.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Risiko kehilangan dan kepemilikan produk beralih kepada Anda setelah pengiriman ke kurir. Kami tidak bertanggung jawab atas paket yang hilang, dicuri, atau rusak setelah dikirimkan ke alamat yang diberikan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Pengembalian dan Penukaran</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami ingin Anda benar-benar puas dengan pembelian Anda. Pengembalian dan penukaran diterima dalam 7 hari setelah pengiriman, dengan ketentuan berikut:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Barang harus dalam kondisi dan kemasan asli</li>
                <li>Tag dan label masih terpasang</li>
                <li>Barang tidak boleh sudah dicuci atau dipakai</li>
                <li>Biaya pengiriman pengembalian ditanggung oleh pelanggan</li>
                <li>Pengembalian dana akan diproses ke metode pembayaran asli</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Garansi dan Perawatan</h2>
              <p className="text-muted-foreground leading-relaxed">
                Produk kami dilengkapi dengan garansi terbatas terhadap cacat produksi. Garansi ini tidak mencakup kerusakan akibat pemakaian normal, perawatan yang tidak tepat, atau kecelakaan. Petunjuk perawatan yang tepat disediakan dengan setiap pembelian dan di website kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Kekayaan Intelektual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Semua konten di website ini, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, dan perangkat lunak, adalah milik NOON STUDIO™ dan dilindungi oleh hak cipta, merek dagang, dan undang-undang kekayaan intelektual lainnya. Penggunaan tanpa izin dilarang.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dalam keadaan apa pun NOON STUDIO™ atau pemasoknya tidak bertanggung jawab atas kerusakan apa pun (termasuk, tanpa batasan, kerusakan karena kehilangan data atau keuntungan, atau karena gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan materi di website atau produk kami, bahkan jika kami telah diberitahu tentang kemungkinan kerusakan tersebut.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Kebijakan Privasi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Privasi Anda penting bagi kami. Silakan tinjau Kebijakan Privasi kami, yang juga mengatur penggunaan Anda atas website dan layanan kami, untuk memahami praktik kami terkait informasi pribadi Anda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Hukum yang Berlaku</h2>
              <p className="text-muted-foreground leading-relaxed">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, dan Anda secara tidak dapat ditarik kembali tunduk pada yurisdiksi eksklusif pengadilan di Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Perubahan Syarat</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami berhak untuk merevisi Syarat & Ketentuan ini kapan saja tanpa pemberitahuan. Dengan menggunakan website ini, Anda setuju untuk terikat oleh versi terkini dari Syarat & Ketentuan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Informasi Kontak</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami di:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>WhatsApp: +62 814-1227-6204</p>
                <p>Instagram: @noonstudio.ac</p>
                <p>Alamat: Taman Nirwana, Rawalumbu, Bekasi Timur 17115</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
