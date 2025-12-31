import React from 'react';
import { Video, Play } from 'lucide-react';

// =====================================================
// EDIT DATA VIDEO DI SINI
// Data sudah ditambahkan menjadi 5 video
// =====================================================
const edukasiVideos = [
  {
    title: "Aplikasi FinSky - Belajar Fintech dengan Cara Menyenangkan",
    youtubeUrl: "https://youtu.be/N-VTNUEJ20E?si=myn1JEh76H7hyLxo",
  },
  {
    title: "Finsky - Materi 1 Teknologi Finansial untuk Pembayaran",
    youtubeUrl: "https://youtu.be/TOu_Sq13xMI",
  },
  {
    title: "Fintech Crowdfunding: Apa dan Bagaimana Cara Kerjanya?",
    youtubeUrl: "https://youtu.be/voF1plqqZJA?si=_RA-IjQh0_wgF699",
  },
  {
    title: "Mengenal Peer-to-Peer (P2P) Lending di Indonesia",
    youtubeUrl: "https://youtu.be/g3YiXV0rPqs?si=-t5hnV6faZ5NHoxr",
  },
  {
    title: "Cerdas Berinvestasi melalui Platform Fintech Investment",
    youtubeUrl: "https://youtu.be/qIw-yFC-HNU?si=pf9DJOwR8_gDO4an",
  },
];

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : '';
};

const VideoSection = () => {
  return (
    <section id="video-edukasi" className="py-16 md:py-24 bg-card relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunset/10 text-sunset mb-4">
            <Video className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Video
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Video Edukasi Fintech
          </h2>
          <p className="text-muted-foreground text-lg">
            Tonton video pembelajaran interaktif dari para ahli fintech dan
            keuangan Indonesia
          </p>
        </div>

        {/* Video Cards Grid - Menggunakan grid 3 kolom pada layar besar (lg) agar lebih rapi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {edukasiVideos.map((video, index) => {
            const videoId = getYouTubeVideoId(video.youtubeUrl);
            return (
              <div
                key={index}
                className="group bg-background rounded-2xl border border-border/50 overflow-hidden hover:shadow-card-hover hover:border-sunset/30 hover:-translate-y-1 transition-all duration-300 w-full flex flex-col"
              >
                {/* YouTube Embed */}
                <div className="relative aspect-video bg-muted">
                  {videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-sunset/20 flex items-center justify-center">
                        <Play className="w-8 h-8 text-sunset" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Title */}
                <div className="p-5 flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-sunset transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
