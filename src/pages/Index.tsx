import PodcastHero from "@/components/PodcastHero";
import AboutSection from "@/components/AboutSection";
import SlideshowHero from "@/components/SlideshowHero";
import FeatureHero from "@/components/FeatureHero";
import HostSection, { HostSectionMirrored } from "@/components/HostSection";
import LaunchpadSection from "@/components/LaunchpadSection";
import tejasImage from "../assets/tejas-host.jpg";
import tejasImg from "../assets/tejas-host.jpg";
// ListenSection and NewsletterSection removed per request
import ContactSection from "@/components/ContactSection";
import MakePodcast from "@/components/MakePodcast";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PodcastHero />
      <main>

        {/* Opening intro: bold, inviting, and unique */}
        <section className="py-10 bg-gradient-to-b from-transparent via-muted-50 to-transparent">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text tracking-normal leading-relaxed">Welcome To The Origin</h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#ccffff' }}>
              A powerful portal to launch your grand story through a grand scheme of deep insights, a dynamic connection which transcends aspirations, dreams and ambitions, a metaphor for glory and for legacies untold and awaiting to unfold.
            </p>
          </div>
        </section>

    <Reveal><AboutSection /></Reveal>
  <Reveal><HostSection /></Reveal>
  <Reveal><HostSectionMirrored showTitle={false} hostName={"Jasbir Singh Rawat (Co-Host & Industry Mentor)"} hostBullets={[]} hostDescription={"Provides creative inputs, business support, and contributes to strengthening the podcast's foundation. Brings marketing and communication insights to shape engaging narratives, enhance audience connect, and ensure the podcast aligns with brand positioning. Supports in crafting compelling messaging, promotional strategies, and audience engagement plans to expand reach and impact."} /></Reveal>
  <Reveal><HostSection showTitle={false} hostName={"Tejas Sawant (Managing Director)"} hostBullets={[]} hostDescription={"Oversees the full production lifecycle of The Origin, driving strategy, execution, digital presence, and business expansion. With a focus on operational excellence and brand growth, he ensures the podcast consistently delivers impactful, high-quality content."} hostImg={tejasImg} /></Reveal>
  <Reveal><LaunchpadSection /></Reveal>
  <Reveal><MakePodcast /></Reveal>
  <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;