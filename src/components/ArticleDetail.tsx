import React from 'react';
import { ChevronLeft, Calendar, User, Clock } from 'lucide-react';

interface ArticleDetailProps {
  id: number;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ id, onBack }) => {
  // Data Konten Artikel
  const articleContent = [
    {
      title: "Literasi Fintech di Era Digital: Kunci Cerdas Mengelola Keuangan Modern",
      date: "29 Desember 2025",
      content: (
        <>
          <p>Perkembangan teknologi digital telah mengubah hampir seluruh aspek kehidupan, termasuk cara masyarakat mengelola keuangan. Kehadiran financial technology (fintech) membuat transaksi menjadi lebih cepat, mudah, dan inklusif.</p>
          <h2>Apa Itu Fintech?</h2>
          <p>Fintech (Financial Technology) adalah inovasi layanan keuangan yang memanfaatkan teknologi digital untuk meningkatkan efisiensi dan aksesibilitas. Contoh layanan populer di Indonesia:</p>
          <ul>
            <li>Dompet digital (e-wallet)</li>
            <li>Pinjaman online (P2P lending)</li>
            <li>Investasi digital</li>
          </ul>
          <h2>Pentingnya Literasi Fintech</h2>
          <p>Literasi membantu masyarakat mengenali fintech legal yang terdaftar di <strong>OJK</strong> serta memahami hak dan kewajiban sebagai pengguna agar terhindar dari pinjol ilegal.</p>
        </>
      )
    },
    {
      title: "5 Tips Aman Bertransaksi Digital",
      date: "29 Desember 2025",
      content: (
        <>
          <p>Risiko seperti penipuan online dan kebocoran data semakin meningkat. Berikut 5 tips wajib:</p>
          <ol>
            <li><strong>Gunakan Aplikasi Resmi:</strong> Pastikan terdaftar di OJK.</li>
            <li><strong>Aktifkan 2FA:</strong> Gunakan PIN, Biometrik, dan OTP.</li>
            <li><strong>Jaga Data Pribadi:</strong> Jangan pernah bagikan OTP ke siapapun.</li>
            <li><strong>Waspada Link Palsu:</strong> Cek alamat website sebelum klik.</li>
            <li><strong>Pantau Riwayat:</strong> Cek saldo dan notifikasi secara berkala.</li>
          </ol>
        </>
      )
    },
    {
      title: "Mengenal Investasi Digital untuk Pemula",
      date: "29 Desember 2025",
      content: (
        <>
          <p>Melalui investasi digital, siapa pun kini bisa mulai berinvestasi hanya dengan smartphone. Seluruh proses dilakukan secara online dan inklusif.</p>
          <h2>Jenis Investasi Populer</h2>
          <ul>
            <li><strong>Reksa Dana:</strong> Dikelola manajer investasi profesional.</li>
            <li><strong>Emas Digital:</strong> Pembelian nominal kecil secara real-time.</li>
            <li><strong>Saham Digital:</strong> Melalui aplikasi sekuritas online.</li>
          </ul>
          <p>Pilihlah platform yang terdaftar OJK dan gunakan "dana dingin" untuk berinvestasi.</p>
        </>
      )
    }
  ];

  const currentArticle = articleContent[id];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sky-primary font-medium mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-5 h-5" /> Kembali ke Beranda
        </button>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            {currentArticle.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-muted-foreground border-y border-border py-4">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {currentArticle.date}</div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Tim Edukasi FinSky</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 Menit Baca</div>
          </div>
        </header>

        {/* Main Content (HTML Style) */}
        <article className="prose prose-blue prose-lg max-w-none text-muted-foreground leading-relaxed">
          {currentArticle.content}
        </article>

        {/* Footer Artikel */}
        <div className="mt-12 p-6 bg-sky-primary/5 rounded-2xl border border-sky-primary/10">
          <p className="text-sm italic">
            <strong>Catatan:</strong> Selalu gunakan layanan fintech yang terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;