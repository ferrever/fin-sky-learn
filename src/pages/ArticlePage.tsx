import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, User, ShieldCheck, TrendingUp, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const articles = [
    {
      title: "Literasi Fintech di Era Digital: Kunci Cerdas Mengelola Keuangan Modern",
      icon: <Lightbulb className="w-12 h-12 text-sunshine" />,
      content: (
        // Ganti bagian "const articles = [ ... ]" di ArticlePage.tsx Anda dengan ini:
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          Perkembangan teknologi digital telah mengubah hampir seluruh aspek kehidupan, termasuk cara masyarakat mengelola keuangan. Kehadiran <strong>financial technology (fintech)</strong> membuat transaksi menjadi lebih cepat, mudah, dan inklusif. Namun, di balik kemudahan tersebut, masih banyak masyarakat yang belum memiliki literasi fintech yang memadai.
        </p>
        <p>
          Literasi fintech bukan hanya soal bisa menggunakan aplikasi keuangan, tetapi juga memahami risiko, manfaat, serta dampak jangka panjang dari keputusan finansial digital. Tanpa literasi yang baik, fintech justru dapat menjadi jebakan baru bagi masyarakat.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Apa Itu Fintech?</h2>
        <p>
          Fintech (Financial Technology) adalah inovasi layanan keuangan yang memanfaatkan teknologi digital untuk meningkatkan efisiensi dan aksesibilitas. Beberapa contoh layanan fintech yang populer di Indonesia antara lain:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dompet digital (e-wallet)</li>
          <li>Pinjaman online (peer-to-peer lending)</li>
          <li>Payment gateway</li>
          <li>Investasi digital</li>
          <li>Insurtech (asuransi berbasis teknologi)</li>
        </ul>
        <p>
          Fintech hadir sebagai solusi atas keterbatasan layanan keuangan konvensional, terutama bagi masyarakat yang sebelumnya tidak terjangkau oleh bank.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Pentingnya Literasi Fintech di Indonesia</h2>
        <p>
          Meskipun pertumbuhan fintech di Indonesia sangat pesat, tingkat literasi keuangan digital masih tergolong rendah. Literasi fintech menjadi penting karena:
        </p>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">1. Mencegah Risiko Keuangan Digital</h3>
          <p>Tanpa pemahaman yang baik, pengguna rentan terhadap pinjaman online ilegal, bunga dan denda tersembunyi, serta kebocoran data pribadi. Literasi membantu masyarakat mengenali fintech legal yang terdaftar di <strong>OJK</strong>.</p>
          
          <h3 className="text-xl font-semibold text-foreground">2. Mendorong Pengelolaan Keuangan yang Lebih Cerdas</h3>
          <p>Dengan literasi, masyarakat dapat mengatur cash flow melalui aplikasi, memilih produk investasi sesuai profil risiko, dan melakukan perencanaan keuangan jangka panjang.</p>
          
          <h3 className="text-xl font-semibold text-foreground">3. Mendukung Inklusi Keuangan Digital</h3>
          <p>Mendorong masyarakat <em>unbanked</em> untuk memanfaatkan layanan keuangan digital secara aman dan bertanggung jawab.</p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Tantangan Literasi Fintech Saat Ini</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kurangnya edukasi berkelanjutan</li>
          <li>Masifnya fintech ilegal</li>
          <li>Minimnya pemahaman terkait keamanan data digital</li>
          <li>Budaya konsumtif akibat kemudahan transaksi</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Strategi Meningkatkan Literasi Fintech</h2>
        <p>Diperlukan kolaborasi antara berbagai pihak:</p>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Pemerintah & Regulator:</strong> Sosialisasi fintech legal dan edukasi perlindungan konsumen.</li>
          <li><strong>Pelaku Fintech:</strong> Transparansi produk dan edukasi pengguna melalui konten digital.</li>
          <li><strong>Masyarakat & Generasi Muda:</strong> Aktif mencari informasi kredibel dan bijak menggunakan layanan digital.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Masa Depan Fintech dan Literasi Digital</h2>
        <p>
          Ke depan, fintech akan semakin terintegrasi dengan kecerdasan buatan (AI), big data, dan blockchain. Literasi fintech bukan lagi pilihan, melainkan kebutuhan utama agar masyarakat mampu beradaptasi dan bertahan di era ekonomi digital.
        </p>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm font-medium">Keyword: literasi fintech, fintech Indonesia, keuangan digital, inklusi keuangan, teknologi keuangan</p>
        </div>
      </div>
    )
    },
    {
      title: "5 Tips Aman Bertransaksi Digital agar Terhindar dari Risiko Fintech",
      icon: <ShieldCheck className="w-12 h-12 text-sky-deep" />,
      content: (
       // Di dalam ArticlePage.tsx, ganti bagian indeks [1] pada array articles:

      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p className="text-lg text-foreground font-medium">
          Perkembangan fintech dan transaksi digital memang memberikan kemudahan luar biasa. Namun, di balik kepraktisan tersebut, risiko seperti penipuan online, kebocoran data, hingga penyalahgunaan akun juga semakin meningkat.
        </p>
        <p>
          Oleh karena itu, penting bagi setiap pengguna untuk memahami cara aman bertransaksi digital. Literasi digital bukan hanya soal bisa menggunakan aplikasi, tetapi juga mampu melindungi diri dari risiko keuangan digital.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Berikut 5 tips penting yang wajib kamu terapkan:</h2>
        
        <div className="space-y-8">
          {/* Tips 1 */}
          <section className="p-6 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-primary text-white text-sm">1</span>
              Gunakan Aplikasi Fintech Resmi dan Terdaftar OJK
            </h3>
            <p>
              Pastikan aplikasi dompet digital, paylater, atau pinjaman online yang kamu gunakan terdaftar dan diawasi oleh <strong>OJK</strong>. Fintech legal memiliki standar keamanan dan perlindungan konsumen yang jelas.
            </p>
            <div className="mt-3 p-3 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm italic">
              👉 Hindari mengunduh aplikasi dari link tidak resmi atau pesan mencurigakan.
            </div>
          </section>

          {/* Tips 2 */}
          <section className="p-6 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-primary text-white text-sm">2</span>
              Aktifkan Keamanan Ganda (Two-Factor Authentication)
            </h3>
            <p>Keamanan ganda membantu melindungi akun dari akses tidak sah meskipun password bocor. Gunakan fitur keamanan seperti:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>PIN dan Password kuat</li>
              <li>Biometrik (sidik jari / face recognition)</li>
              <li>OTP (One Time Password)</li>
            </ul>
          </section>

          {/* Tips 3 */}
          <section className="p-6 bg-card border rounded-2xl shadow-sm border-destructive/20">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-white text-sm">3</span>
              Jangan Pernah Membagikan Data Pribadi
            </h3>
            <p>Data rahasia <strong>tidak boleh dibagikan ke siapa pun</strong>, termasuk yang mengaku sebagai pihak fintech. Data tersebut meliputi:</p>
            <ul className="list-disc pl-6 mt-2 text-destructive font-medium">
              <li>Kode OTP, PIN, dan Password</li>
              <li>Nomor kartu identitas (NIK)</li>
            </ul>
            <p className="mt-2 text-sm italic">Perusahaan resmi tidak pernah meminta data rahasia melalui chat atau telepon.</p>
          </section>

          {/* Tips 4 */}
          <section className="p-6 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-primary text-white text-sm">4</span>
              Waspada terhadap Promo dan Link Palsu
            </h3>
            <p>Promo besar sering dimanfaatkan pelaku kejahatan untuk <em>phishing</em>. Selalu lakukan langkah berikut:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>Cek alamat website secara teliti</li>
              <li>Hindari klik link dari pesan tidak dikenal</li>
              <li>Verifikasi promo melalui aplikasi atau akun resmi fintech</li>
            </ul>
          </section>

          {/* Tips 5 */}
          <section className="p-6 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-primary text-white text-sm">5</span>
              Pantau Riwayat Transaksi Secara Berkala
            </h3>
            <p>Biasakan mengecek riwayat transaksi, notifikasi pembayaran, serta saldo dan limit akun. Jika menemukan transaksi mencurigakan, segera:</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">Ubah password</span>
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">Laporkan ke CS</span>
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">Blokir akun sementara</span>
            </div>
          </section>
        </div>

        <p className="mt-8">
          Transaksi digital adalah bagian dari gaya hidup modern, tetapi keamanan tetap menjadi prioritas utama. Dengan menerapkan kelima tips di atas, kamu dapat memanfaatkan layanan fintech secara aman, cerdas, dan bertanggung jawab.
        </p>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm font-medium">
            Keyword: tips aman transaksi digital, keamanan fintech, cara aman menggunakan e-wallet, literasi keuangan digital, transaksi online aman
          </p>
        </div>
      </div>
      )
    },
    {
      title: "Mengenal Investasi Digital untuk Pemula: Panduan Aman Memulai",
      icon: <TrendingUp className="w-12 h-12 text-sunset" />,
      content: (

      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p className="text-lg text-foreground font-medium">
          Di era digital, investasi tidak lagi identik dengan modal besar atau proses yang rumit. Melalui investasi digital, siapa pun kini bisa mulai berinvestasi hanya dengan smartphone dan koneksi internet.
        </p>
        <p>
          Tak heran jika investasi digital menjadi salah satu layanan fintech yang paling diminati, terutama oleh generasi muda. Namun, kemudahan ini juga perlu diimbangi dengan pemahaman yang baik agar pemula tidak salah langkah.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Apa Itu Investasi Digital?</h2>
        <p>
          Investasi digital adalah aktivitas penanaman modal yang dilakukan melalui platform berbasis teknologi (aplikasi atau website). Seluruh proses, mulai dari pendaftaran, transaksi, hingga pemantauan aset, dilakukan secara online.
        </p>
        <div className="p-4 bg-sky-primary/5 border-l-4 border-sky-primary rounded-r-xl italic">
          Investasi digital hadir sebagai solusi praktis yang lebih inklusif dibanding investasi konvensional.
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Jenis Investasi Digital Populer untuk Pemula</h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="p-5 bg-card border rounded-2xl shadow-sm">
            <h4 className="font-bold text-foreground mb-2">1. Reksa Dana Online</h4>
            <p className="text-sm">Cocok untuk pemula karena dana dikelola oleh manajer investasi profesional. Risiko tersebar dan modal awal relatif kecil.</p>
          </div>
          <div className="p-5 bg-card border rounded-2xl shadow-sm">
            <h4 className="font-bold text-foreground mb-2">2. Saham Digital</h4>
            <p className="text-sm">Bisa dilakukan melalui aplikasi sekuritas online. Cocok bagi yang siap belajar dan memahami risiko fluktuasi harga.</p>
          </div>
          <div className="p-5 bg-card border rounded-2xl shadow-sm">
            <h4 className="font-bold text-foreground mb-2">3. Emas Digital</h4>
            <p className="text-sm">Memungkinkan pembelian emas mulai dari nominal kecil dan dapat dipantau secara real-time.</p>
          </div>
          <div className="p-5 bg-card border rounded-2xl shadow-sm">
            <h4 className="font-bold text-foreground mb-2">4. Aset Kripto</h4>
            <p className="text-sm text-destructive">Menawarkan potensi keuntungan tinggi, namun risikonya sangat besar. Pemula perlu ekstra hati-hati.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Mengapa Menarik bagi Pemula?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none pl-0">
          <li className="flex items-center gap-2">✅ Modal awal terjangkau</li>
          <li className="flex items-center gap-2">✅ Akses mudah dan cepat</li>
          <li className="flex items-center gap-2">✅ Transparansi data</li>
          <li className="flex items-center gap-2">✅ Fitur edukasi dalam aplikasi</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Risiko yang Perlu Dipahami</h2>
        <p>Meskipun praktis, investasi digital tetap memiliki risiko seperti fluktuasi nilai aset, risiko penipuan platform ilegal, hingga keputusan impulsif akibat tren semata.</p>

        <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-900 mt-8">
          <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-4">Tips Investasi Aman</h2>
          <ul className="space-y-3 text-amber-900 dark:text-amber-300">
            <li>• Memilih platform investasi yang terdaftar <strong>OJK</strong>.</li>
            <li>• Memulai dari produk berisiko rendah.</li>
            <li>• Jangan tergiur imbal hasil tinggi dalam waktu singkat.</li>
            <li>• Gunakan <strong>dana dingin</strong> (bukan dana kebutuhan pokok).</li>
            <li>• Terus belajar dan mengikuti edukasi investasi.</li>
          </ul>
        </div>

        <p className="mt-8">
          Investasi bukan soal cepat kaya, melainkan konsistensi dan perencanaan jangka panjang. Dengan literasi yang kuat, investasi digital dapat menjadi alat untuk mencapai stabilitas dan kebebasan finansial.
        </p>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Keyword: investasi digital, investasi digital untuk pemula, fintech investasi, literasi keuangan digital, investasi online aman
          </p>
        </div>
      </div>
      )
    },
    {
    title: "Mengenal Jenis-Jenis Fintech, Manfaat, dan Contoh Perusahaannya",
    icon: <TrendingUp className="w-12 h-12 text-blue-600" />, // Gunakan ikon yang relevan
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          Perkembangan teknologi digital telah membawa perubahan besar dalam industri keuangan. Salah satu inovasi paling berpengaruh adalah <strong>Financial Technology (Fintech)</strong>. Kehadiran fintech membuat layanan keuangan menjadi lebih cepat, praktis, dan mudah diakses oleh berbagai lapisan masyarakat.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Apa Itu Fintech?</h2>
        <p>
          Fintech adalah inovasi layanan keuangan yang memanfaatkan teknologi digital untuk meningkatkan efisiensi, kenyamanan, dan aksesibilitas dalam aktivitas keuangan. Berbeda dengan sistem konvensional, fintech memungkinkan transaksi kapan saja melalui smartphone.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Jenis-Jenis Fintech yang Perlu Diketahui</h2>
        
        <div className="grid gap-6 mt-4">
          {/* 1. Digital Payment */}
          <section className="p-5 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-2">1. Pembayaran Digital (E-Wallet)</h3>
            <p className="text-sm">Berfokus pada layanan non-tunai. Contoh: <strong>GoPay, OVO, DANA, ShopeePay.</strong></p>
          </section>

          {/* 2. P2P Lending */}
          <section className="p-5 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-2">2. Peer-to-Peer (P2P) Lending</h3>
            <p className="text-sm">Mempertemukan pemberi dana dan peminjam secara langsung. Contoh: <strong>KoinWorks, Investree, Amartha.</strong></p>
          </section>

          {/* 3. Crowdfunding */}
          <section className="p-5 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-2">3. Crowdfunding</h3>
            <p className="text-sm">Penggalangan dana kolektif untuk sosial atau bisnis. Contoh: <strong>Kitabisa, Bizhare.</strong></p>
          </section>

          {/* 4. Investasi Digital */}
          <section className="p-5 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-2">4. Investasi & Wealth Management</h3>
            <p className="text-sm">Mengelola portofolio investasi secara digital. Contoh: <strong>Bibit, Ajaib, Bareksa.</strong></p>
          </section>

          {/* 5. Bank Digital */}
          <section className="p-5 bg-card border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-2">5. Bank Digital (Neobank)</h3>
            <p className="text-sm">Bank tanpa kantor fisik, operasi 100% online. Contoh: <strong>Jenius, Bank Jago, SeaBank.</strong></p>
          </section>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Manfaat Fintech bagi Masyarakat</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Kemudahan Akses:</strong> Layanan keuangan tanpa batasan lokasi.</li>
          <li><strong>Efisiensi:</strong> Transaksi lebih cepat dengan biaya lebih rendah.</li>
          <li><strong>Inklusi Keuangan:</strong> Menjangkau masyarakat yang belum tersentuh perbankan (unbanked).</li>
          <li><strong>Keamanan:</strong> Dilengkapi sistem enkripsi dan pengawasan OJK.</li>
        </ul>

        <div className="bg-sky-primary/5 p-6 rounded-2xl border border-sky-primary/20 mt-8">
          <h3 className="text-lg font-bold text-sky-deep mb-2">Kesimpulan</h3>
          <p className="text-sm italic">
            Fintech mendorong transformasi keuangan yang lebih inklusif. Sebagai pengguna, pastikan selalu memilih platform yang <strong>terdaftar dan diawasi oleh OJK</strong> untuk keamanan transaksi Anda.
          </p>
        </div>
      </div>
      )
    },
    {
      title: "Keamanan dan Privasi Data: Pentingnya Melindungi Informasi Pribadi di Era Digital",
      icon: <ShieldCheck className="w-12 h-12 text-red-600" />, 
      content: (
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Di era digital saat ini, data menjadi aset yang sangat berharga. Setiap aktivitas online—mulai dari media sosial hingga transaksi keuangan—melibatkan pertukaran data pribadi. Oleh karena itu, keamanan dan privasi data menjadi isu penting yang harus dipahami.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
              <h3 className="font-bold text-blue-900 mb-2">Keamanan Data</h3>
              <p className="text-sm">Upaya melindungi data dari akses tidak sah, pencurian, atau kebocoran secara digital maupun fisik.</p>
            </div>
            <div className="p-6 bg-green-50 border border-green-100 rounded-2xl">
              <h3 className="font-bold text-green-900 mb-2">Privasi Data</h3>
              <p className="text-sm">Hak individu untuk mengontrol bagaimana data pribadinya dikumpulkan, digunakan, dan dibagikan.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8">Jenis Data yang Wajib Dilindungi</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none pl-0">
            <li className="flex items-center gap-2">🔑 Data Login (PIN, OTP, Password)</li>
            <li className="flex items-center gap-2">💳 Data Finansial (No. Rekening, Kartu)</li>
            <li className="flex items-center gap-2">🆔 Data Identitas (NIK, Alamat)</li>
            <li className="flex items-center gap-2">📍 Data Aktivitas (Lokasi, Riwayat)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8">Ancaman Digital yang Sering Terjadi</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 border-l-4 border-red-500 bg-red-50/30">
              <div>
                <h4 className="font-bold text-red-700">Phishing</h4>
                <p className="text-sm">Penipuan menyamar sebagai pihak resmi untuk mencuri data sensitif melalui link palsu.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border-l-4 border-red-500 bg-red-50/30">
              <div>
                <h4 className="font-bold text-red-700">Malware & Ransomware</h4>
                <p className="text-sm">Perangkat lunak berbahaya yang merusak atau mengunci data untuk meminta tebusan.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8">Langkah Proteksi Mandiri</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Password Unik:</strong> Gunakan kombinasi karakter yang sulit ditebak.</li>
            <li><strong>Aktifkan 2FA:</strong> Lapisan keamanan ganda adalah wajib.</li>
            <li><strong>Hindari Wi-Fi Publik:</strong> Jangan bertransaksi keuangan di jaringan terbuka.</li>
            <li><strong>Update Berkala:</strong> Pembaruan aplikasi biasanya membawa patch keamanan terbaru.</li>
          </ol>

          <div className="mt-12 p-6 bg-card border rounded-2xl shadow-inner italic text-center">
            "Keamanan data bukan hanya tanggung jawab teknologi, tetapi juga kebiasaan pengguna."
          </div>
        </div>
      )
    },
    {
      title: "Regulasi dan Perlindungan Fintech di Indonesia: Peran OJK dan BI",
      icon: <ShieldCheck className="w-12 h-12 text-blue-800" />, 
      content: (
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Perkembangan <em>financial technology</em> (fintech) di Indonesia tumbuh sangat pesat. Namun, di balik kemudahan tersebut, muncul risiko seperti penipuan dan fintech ilegal. Oleh karena itu, regulasi menjadi aspek penting untuk menjaga keamanan pengguna dan stabilitas sistem keuangan.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">Lembaga Pengawas Fintech di Indonesia</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {/* Peran OJK */}
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl shadow-sm">
              <div className="font-bold text-amber-900 text-xl mb-3 flex items-center gap-2">
                🏛️ OJK
              </div>
              <p className="text-sm font-semibold text-amber-800 mb-2">Otoritas Jasa Keuangan</p>
              <ul className="text-sm space-y-2 text-amber-900/80">
                <li>• Mengawasi Fintech Lending (P2P)</li>
                <li>• Menetapkan perizinan resmi</li>
                <li>• Melindungi konsumen dari pinjol ilegal</li>
              </ul>
            </div>

            {/* Peran BI */}
            <div className="p-6 bg-red-50 border border-red-200 rounded-2xl shadow-sm">
              <div className="font-bold text-red-900 text-xl mb-3 flex items-center gap-2">
                🏦 Bank Indonesia
              </div>
              <p className="text-sm font-semibold text-red-800 mb-2">Bank Sentral</p>
              <ul className="text-sm space-y-2 text-red-900/80">
                <li>• Mengatur sistem pembayaran digital</li>
                <li>• Mengawasi QRIS & Payment Gateway</li>
                <li>• Menjaga stabilitas nilai Rupiah digital</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8">Bentuk Perlindungan Konsumen</h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border rounded-xl flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-sm"><strong>Transparansi Informasi:</strong> Fintech wajib menyampaikan biaya dan risiko secara jujur.</p>
            </div>
            <div className="p-4 bg-card border rounded-xl flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-sm"><strong>Batasan Bunga:</strong> Regulator menetapkan batas bunga maksimal agar tidak memberatkan.</p>
            </div>
            <div className="p-4 bg-card border rounded-xl flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-sm"><strong>Kerahasiaan Data:</strong> Larangan penyalahgunaan data pribadi tanpa izin pengguna.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8">Tips Aman bagi Pengguna</h2>
          <div className="bg-sky-primary/5 p-6 rounded-2xl border border-sky-primary/10">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✅ Cek status izin di website <a href="https://www.ojk.go.id" className="text-sky-deep underline">ojk.go.id</a></li>
              <li className="flex items-center gap-2">✅ Gunakan layanan sesuai kemampuan finansial</li>
              <li className="flex items-center gap-2">✅ Jangan memberikan akses kontak atau galeri pada aplikasi pinjaman</li>
            </ul>
          </div>

          <p className="mt-8">
            Dengan pengawasan ketat dari OJK dan BI, diharapkan ekosistem fintech di Indonesia dapat tumbuh secara sehat dan memberikan manfaat maksimal bagi inklusi keuangan nasional.
          </p>
        </div>
      )
    },
  ];
  const article = articles[Number(id)];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
          <button onClick={() => navigate('/')} className="text-sky-primary hover:underline">Kembali ke Beranda</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <button 
          onClick={() => navigate('/')} 
          className="group flex items-center gap-2 text-sky-deep mb-10 hover:translate-x-[-4px] transition-transform font-medium"
        >
          <ChevronLeft className="w-5 h-5" /> Kembali ke Beranda
        </button>
        
        <div className="mb-8">{article.icon}</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">{article.title}</h1>
        
        <div className="flex flex-wrap gap-6 text-muted-foreground mb-10 border-y py-6">
          <span className="flex items-center gap-2 text-sm"><Calendar className="w-4 h-4" /> 29 Desember 2025</span>
          <span className="flex items-center gap-2 text-sm"><User className="w-4 h-4" /> Tim Edukasi FinSky</span>
          <span className="flex items-center gap-2 text-sm"><Clock className="w-4 h-4" /> 6 Menit Baca</span>
        </div>

        <div className="article-content">
          {article.content}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
