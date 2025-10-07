import { Button } from "@/components/ui/button";
import { Play, Clock, Youtube, Music2, Facebook, Instagram } from "lucide-react";
import { platformLinks } from "@/config/platformLinks";

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    color: "text-red-600",
    bgColor: "bg-red-600/10",
    hoverColor: "hover:bg-red-600/20"
  },
  {
    name: "Spotify",
    icon: Music2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20"
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    hoverColor: "hover:bg-blue-600/20"
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    hoverColor: "hover:bg-pink-500/20"
  }
];

const episodes = [
  {
    id: 1,
    title: "Origins of Ancient Civilizations",
    description: "Journey back to the birth of human civilization and discover the foundations that shaped our world.",
    duration: "42 min",
    platform: "YouTube",
    views: "1.2M views",
    link: "https://youtube.com/@theorigin-bytac?si=M0_sFanCY2fGGNMy"
  },
  {
    id: 2,
    title: "The Birth of the Internet",
    description: "How a military project became the most transformative technology of our time.",
    duration: "38 min",
    platform: "Spotify",
    views: "856K plays",
    link: "https://open.spotify.com/show/7LaxHSFHYi4UKq5XGtazDH"
  },
  {
    id: 3,
    title: "The First Steps on the Moon",
    description: "The untold story behind humanity's greatest leap into the unknown.",
    duration: "45 min",
    platform: "Facebook",
    views: "2.1M views",
    link: "https://www.facebook.com/share/1Jbr2V9d4C/?mibextid=wwXIfr"
  },
  {
    id: 4,
    title: "The Renaissance Revolution",
    description: "When art, science, and philosophy converged to change the world forever.",
    duration: "40 min",
    platform: "Instagram",
    views: "950K views",
    link: "https://www.instagram.com/theorigin_bytac?igsh=NjR1NWtsZzZuYjVy&utm_source=qr"
  }
];

export default function FeaturedEpisodes() {
  const getPlatformInfo = (platformName: string) => {
    return platforms.find((p) => p.name === platformName) || platforms[0];
  };

  return (
    <section
      data-section="episodes"
      className="w-full bg-card/20 mt-16 py-8 md:py-24 overflow-hidden"
    >
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-normal leading-relaxed mb-6">
            Featured Episodes
          </h2>
          <p className="text-accent text-sm md:text-lg font-medium mt-2 mb-4 animate-fade-in max-w-full">
            Watch & Listen Everywhere
          </p>
        </div>

        {/* Platform Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {platforms.map((platform) => {
            const url = (platformLinks as Record<string, string>)[platform.name] || "";
            const content = (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${platform.bgColor} ${platform.hoverColor}`}>
                <platform.icon className={`w-5 h-5 ${platform.color}`} />
                <span className={`text-sm font-medium ${platform.color}`}>{platform.name}</span>
              </div>
            );

            return url ? (
              <a key={platform.name} href={url} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <button key={platform.name} className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${platform.bgColor} ${platform.hoverColor}`}>
                <platform.icon className={`w-5 h-5 ${platform.color}`} />
                <span className={`text-sm font-medium ${platform.color}`}>{platform.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {episodes.map((episode) => {
            const platform = getPlatformInfo(episode.platform);
            return (
              <div
                key={episode.id}
                className="glass-card rounded-lg md:rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full max-w-full"
              >
                <div className={`relative aspect-[16/9] overflow-hidden min-h-[180px] ${platform.bgColor}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <platform.icon className={`w-16 h-16 ${platform.color} opacity-20`} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        variant="hero"
                        size="sm"
                        className="w-full"
                        onClick={() => window.open(episode.link, '_blank')}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Watch Now
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between gap-2 text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 md:h-4 md:w-4" />
                      {episode.duration}
                    </div>
                    <div className={`flex items-center gap-1.5 ${platform.color}`}>
                      <platform.icon className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{episode.views}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 md:mb-3 text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {episode.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                    {episode.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
