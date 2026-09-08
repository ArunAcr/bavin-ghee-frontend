import Image from "next/image";

interface ShowcaseVideo {
  title: string;
  description: string;
  src?: string;
  poster: string;
}

const videos: ShowcaseVideo[] = [
  {
    title: "Traditional Bilona Churning",
    description: "Slow-churned by hand, the way it's been done for generations.",
    src: "/images/products/banner_video_1.mp4",
    poster: "/images/products/banner_1.png",
  },
  {
    title: "Packaging & Bottling",
    description: "Hygienically sealed and packed fresh, batch by batch.",
    poster: "/images/products/ghee_1.png",
  },
  {
    title: "Quality Check",
    description: "Every jar checked for purity and consistency before it ships.",
    poster: "/images/products/butter_1.png",
  },
];

export default function VideoShowcase() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
            Behind the Craft
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            See How Bavin Ghee is Made
          </h2>
          <p className="mt-3 text-foreground/60">
            From the churn to the jar, every step is slow, traditional and hands-on.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:h-[560px]">
          {videos.map((video, i) => {
            const featured = i === 0;
            return (
              <div
                key={video.title}
                className={`flex flex-col gap-3 ${
                  featured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className="relative flex-1 aspect-video lg:aspect-auto rounded-2xl overflow-hidden bg-black">
                  {video.src ? (
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={video.poster}
                      className="h-full w-full object-cover"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  ) : (
                    <>
                      <Image
                        src={video.poster}
                        alt={video.title}
                        fill
                        sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                        className="object-cover opacity-70"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <span className="rounded-full bg-cream/90 text-maroon text-xs font-bold uppercase tracking-wide px-4 py-2">
                          Coming Soon
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <h3 className={`font-display font-bold text-maroon ${featured ? "text-xl" : "text-base"}`}>
                  {video.title}
                </h3>
                <p className="text-sm text-foreground/60">{video.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
