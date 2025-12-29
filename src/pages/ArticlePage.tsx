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
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg text-foreground font-medium">Perkembangan teknologi digital telah mengubah hampir seluruh aspek kehidupan, termasuk cara masyarakat mengelola keuangan. Kehadiran financial technology (fintech) membuat transaksi menjadi lebih cepat, mudah, dan inklusif.</p>
          <p>Namun, di balik kemudahan tersebut, masih banyak masyarakat yang belum memiliki literasi fintech yang memadai. Literasi fintech bukan hanya soal bisa menggunakan aplikasi keuangan, tetapi juga memahami risiko, manfaat, serta dampak jangka panjang dari keputusan finansial digital.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">Apa Itu Fintech?</h2>
          <p>Fintech (Financial Technology) adalah inovasi layanan keuangan yang memanfaatkan teknologi digital untuk meningkatkan efisiensi dan aksesibilitas. Contoh layanan fintech populer di Indonesia:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dompet digital (e-wallet)</li>
            <li>Pinjaman online (peer-to-peer lending)</li>
            <li>Investasi digital</li>
            <li>Insurtech (asuransi berbasis teknologi)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8">Pentingnya Literasi Fintech di Indonesia</h2>
          <div className="grid gap-4 mt-4">
            <div className="p-4 bg-card border rounded-xl">
              <h3 className="font-bold text-foreground">1. Mencegah Risiko Keuangan Digital</h3>
              <p className="text-sm">Membantu masyarakat mengenali fintech legal yang terdaftar di OJK serta memahami hak dan kewajiban sebagai pengguna.</p>
            </div>
            <div className="p-4 bg-card border rounded-xl">
              <h3 className="font-bold text-foreground">2. Pengelolaan Keuangan Cerdas</h3>
              <p className="text-sm">Mengatur cash flow dan memilih produk investasi yang sesuai profil risiko.</p>
            </div>
          </div>

          <p className="mt-6 italic border-t pt-4">Keyword: literasi fintech, fintech Indonesia, keuangan digital, inklusi keuangan, teknologi keuangan</p>
        </div>
      )
    },
    {
      title: "5 Tips Aman Bertransaksi Digital agar Terhindar dari Risiko Fintech",
      icon: <ShieldCheck className="w-12 h-12 text-sky-deep" />,
      content: (
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">Penting bagi setiap pengguna untuk memahami cara aman bertransaksi digital guna menghindari penipuan online dan kebocoran data.</p>
          
          <div className="space-y-8 mt-6">
            <section>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">1. Gunakan Aplikasi Resmi (OJK)</h3>
              <p>Pastikan aplikasi terdaftar dan diawasi oleh OJK. Hindari mengunduh aplikasi dari link tidak resmi.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">2. Aktifkan Keamanan Ganda (2FA)</h3>
              <p>Gunakan PIN, Password kuat, Biometrik, dan OTP (One Time Password) untuk melindungi akun.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">3. Jangan Bagikan Data Pribadi</h3>
              <p className="text-destructive font-medium">Jangan pernah membagikan OTP, PIN, atau Password ke siapa pun, termasuk pihak yang mengaku dari fintech.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">4. Waspada Promo & Link Palsu</h3>
              <p>Cek alamat website dan verifikasi promo melalui akun resmi fintech sebelum melakukan klik.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">5. Pantau Riwayat Secara Berkala</h3>
              <p>Biasakan mengecek notifikasi pembayaran dan saldo akun untuk mendeteksi transaksi mencurigakan sejak dini.</p>
            </section>
          </div>
        </div>
      )
    },
    {
      title: "Mengenal Investasi Digital untuk Pemula: Panduan Aman Memulai",
      icon: <TrendingUp className="w-12 h-12 text-sunset" />,
      content: (
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">Melalui investasi digital, siapa pun kini bisa mulai berinvestasi hanya dengan smartphone dan koneksi internet.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">Jenis Investasi Populer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-card">
              <h4 className="font-bold text-sky-deep">Reksa Dana Online</h4>
              <p className="text-sm">Dana dikelola oleh manajer investasi profesional. Cocok untuk pemula.</p>
            </div>
            <div className="p-4 rounded-xl border bg-card">
              <h4 className="font-bold text-sky-deep">Emas Digital</h4>
              <p className="text-sm">Memungkinkan pembelian emas mulai dari nominal kecil secara real-time.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8">Tips Investasi Aman</h2>
          <ul className="list-decimal pl-6 space-y-3">
            <li>Pilih platform yang terdaftar di <strong>OJK</strong>.</li>
            <li>Mulai dari produk berisiko rendah.</li>
            <li>Gunakan <strong>dana dingin</strong> (bukan dana kebutuhan pokok).</li>
            <li>Konsistensi lebih penting daripada ingin cepat kaya.</li>
          </ul>

          <div className="bg-sky-primary/10 p-6 rounded-2xl mt-8">
            <p className="text-foreground font-semibold italic text-center">"Investasi bukan soal cepat kaya, melainkan konsistensi dan perencanaan jangka panjang."</p>
          </div>
        </div>
      )
    }
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