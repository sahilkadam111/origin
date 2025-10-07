import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroOrigin from "@/assets/hero-origin.jpg";
import originLogo from "@/assets/origin logo.png";
import voicesConnect from "@/assets/voices-that-connect.png";

export default function PodcastHero() {
  return (
  <section data-section="home" className="hero-bg min-h-screen flex items-center justify-start relative overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroOrigin} 
          alt="Origin Hero Background" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>


      {/* Content */}
  <div className="relative z-10 max-w-6xl ml-0 pl-6 md:pl-12 lg:pl-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="text-left md:pl-12 lg:pl-16 py-12 md:py-20 max-w-xl">
            {/* Hero title, author tag, CTA and stats were removed per request */}
          </div>

          {/* Right: decorative/empty space to keep hero balanced on larger screens */}
          <div className="hidden md:block w-full h-96" aria-hidden>
            {/* intentionally left blank: background image covers this area */}
          </div>
        </div>

        {/* Voices image at base of hero */}
        <div className="mt-8 w-full">
          <div className="w-full max-w-6xl pl-6 md:pl-12 lg:pl-20">
            <div className="translate-y-2 -translate-x-2 sm:-translate-x-3 md:-translate-x-4">
              <img src={voicesConnect} alt="Voices That Connect" className="h-12 sm:h-16 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* hero follow-up paragraph removed per request */}
      </div>
    </section>
  );
}