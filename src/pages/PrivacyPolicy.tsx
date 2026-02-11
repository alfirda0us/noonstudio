import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Kebijakan Privasi - NOON STUDIO™";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-light text-foreground mb-4">Kebijakan Privasi</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: 1 Februari 2024</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Pendahuluan</h2>
              <p className="text-muted-foreground leading-relaxed">
                Di NOON STUDIO™ ("kami"), kami menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda mengunjungi website kami, melakukan pembelian, atau berinteraksi dengan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Informasi yang Kami Kumpulkan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Informasi Pribadi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara langsung kepada kami, termasuk:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Nama, alamat email, dan informasi kontak</li>
                    <li>Alamat penagihan dan pengiriman</li>
                    <li>Informasi pembayaran (diproses secara aman melalui penyedia pihak ketiga)</li>
                    <li>Preferensi akun dan pengaturan komunikasi</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Informasi Penggunaan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami secara otomatis mengumpulkan informasi tertentu tentang perangkat dan pola penggunaan Anda, termasuk alamat IP, jenis browser, halaman yang dikunjungi, dan data interaksi untuk meningkatkan layanan dan pengalaman pengguna kami.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan, termasuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Memproses dan memenuhi pesanan Anda</li>
                <li>Menyediakan dukungan pelanggan dan menanggapi pertanyaan</li>
                <li>Mengirim komunikasi promosi (dengan persetujuan Anda)</li>
                <li>Meningkatkan fungsionalitas website dan pengalaman pengguna</li>
                <li>Mencegah penipuan dan memastikan keamanan</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Berbagi dan Pengungkapan Informasi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya dapat membagikan informasi Anda dalam keadaan berikut:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Dengan penyedia layanan yang membantu kami dalam mengoperasikan bisnis kami</li>
                <li>Ketika diwajibkan oleh hukum atau untuk melindungi hak-hak kami</li>
                <li>Sehubungan dengan transaksi bisnis (merger, akuisisi, dll.)</li>
                <li>Dengan persetujuan eksplisit Anda</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Keamanan Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami menerapkan langkah-langkah teknis dan organisasi yang tepat untuk melindungi informasi pribadi Anda dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah. Namun, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Hak dan Pilihan Anda</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tergantung pada lokasi Anda, Anda mungkin memiliki hak-hak tertentu terkait informasi pribadi Anda:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Akses ke informasi pribadi Anda</li>
                <li>Koreksi informasi yang tidak akurat atau tidak lengkap</li>
                <li>Penghapusan informasi pribadi Anda</li>
                <li>Keberatan atau pembatasan pemrosesan</li>
                <li>Portabilitas data</li>
                <li>Penarikan persetujuan (jika berlaku)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Cookie dan Pelacakan</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman browsing Anda, menganalisis lalu lintas website, dan mempersonalisasi konten. Anda dapat mengontrol pengaturan cookie melalui preferensi browser Anda, meskipun ini dapat memengaruhi fungsionalitas website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Perubahan Kebijakan Ini</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan signifikan dengan memposting kebijakan baru di website kami dan memperbarui tanggal "Terakhir diperbarui" di atas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami, silakan hubungi kami di:
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

export default PrivacyPolicy;
