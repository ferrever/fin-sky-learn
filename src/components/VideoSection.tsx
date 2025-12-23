import React from 'react';
import { Video, Play } from 'lucide-react';

// =====================================================
// EDIT DATA VIDEO DI SINI
// Ganti title dan youtubeUrl sesuai kebutuhan
// Format URL: https://www.youtube.com/watch?v=VIDEO_ID
// =====================================================
const edukasiVideos = [
  {
    title: "Belajar Dasar Fintech",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Cara Mengelola Keuangan Digital",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Tips Investasi untuk Pemula",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Keamanan Transaksi Online",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Memahami Cryptocurrency",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "E-Wallet vs Mobile Banking",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
            <span className="text-sm font-semibold uppercase tracking-wider">Video</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Video Edukasi Fintech
          </h2>
          <p className="text-muted-foreground text-lg">
            Tonton video pembelajaran interaktif dari para ahli fintech dan keuangan Indonesia
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edukasiVideos.map((video, index) => {
            const videoId = getYouTubeVideoId(video.youtubeUrl);
            return (
              <div
                key={index}
                className="group bg-background rounded-2xl border border-border/50 overflow-hidden hover:shadow-card-hover hover:border-sunset/30 hover:-translate-y-1 transition-all duration-300"
              >
                {/* YouTube Embed */}
                <div className="relative aspect-video bg-muted">
                  {videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
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
                <div className="p-4">
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
