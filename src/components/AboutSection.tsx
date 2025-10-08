// podcastChair removed per user request

export default function AboutSection() {
  return (
    <section data-section="about" className="py-20 px-6 bg-background relative">
      {/* Background image removed per request */}

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="bg-card/60 backdrop-blur-md rounded-2xl p-10 md:p-14 text-center shadow-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 gradient-text tracking-normal leading-relaxed">About us</h2>
          <p className="text-accent font-medium mb-4 tracking-wide uppercase">Where it All Begins…..</p>

          <div className="mx-auto max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-100">
              This is where we rise above and beyond mere numbers while you make the headlines that chart your story while unveiling the cast behind the glory. Blending candid conversations with impactful insights, we are here to give our listeners both inspiration, influential and actionable lessons through a grand ensemble of dynamic observations analysed, researched and validated in a simple, straightforward and impactful manner. You are just one story away from from a revolution to ignite your perception through the pulse of a generation, which holds the keys to the doorways of tomorrow.
            </p>

            <div className="flex items-center justify-center">
              <span className="h-1 w-20 rounded-full bg-gradient-to-r from-accent to-[#d8b036] opacity-90" />
            </div>
          </div>
        </div>

        {/* Vision & Mission removed per request */}
      </div>
    </section>
  );
}