import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import useActiveSection from "@/hooks/useActiveSection"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import originLogo from "@/assets/origin logo.png"

// Custom hamburger menu component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-6 h-6 cursor-pointer">
      <span className={cn(
        "absolute h-[2px] bg-current transition-all duration-300 ease-in-out transform",
        "before:absolute before:h-[2px] before:bg-current before:transition-all before:duration-300 before:content-['']",
        "after:absolute after:h-[2px] after:bg-current after:transition-all after:duration-300 after:content-['']",
        "w-6 top-1/2 -translate-y-1/2",
        "before:w-6 before:-top-2",
        "after:w-6 after:top-2",
        isOpen && [
          "bg-transparent",
          "before:rotate-45 before:translate-y-2",
          "after:-rotate-45 after:-translate-y-2"
        ]
      )} />
    </div>
  );
};

const Header = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  const buttonStyles = (section: string) => {
    return cn(
      "relative overflow-hidden group px-5 py-2 rounded-full transition-all duration-300",
      "text-sm font-semibold tracking-wide",
      "border border-transparent",
      "backdrop-blur-sm",
      activeSection === section
        ? [
            "text-white",
            "bg-gradient-to-r from-accent to-primary",
            "shadow-[0_6px_24px_rgba(58,123,213,0.18)]",
            "scale-100",
          ]
        : [
            "text-white/80",
            "bg-transparent",
            "hover:bg-accent/10",
            "hover:text-white",
            "hover:scale-105",
          ],
    );
  };

  const [isOpen, setIsOpen] = useState(false);



  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      "before:absolute before:inset-0 before:bg-gradient-to-b before:from-background/80 before:to-transparent",
      "before:transition-opacity before:duration-500",
      isScrolled ? "before:opacity-100" : "before:opacity-0 hover:before:opacity-50"
    )}>
      <div className="relative z-10 flex items-center justify-between px-3 md:px-6 py-2 md:py-3">
        <div className="flex items-center">
          <div className="relative group">
            <div className={cn(
              "absolute -inset-2 rounded-xl transition-all duration-300",
              "opacity-0 group-hover:opacity-100",
              "bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10",
              "group-hover:blur-md"
            )}/>
            <img 
              src={originLogo} 
              alt="Origin Story Logo" 
              className={cn(
                "h-20 md:h-28 w-auto relative cursor-pointer",
                "transition-all duration-300",
                "group-hover:brightness-125",
                "group-hover:scale-105"
              )}
              onClick={() => {
                scrollToSection('home');
              }}
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3">
          { /* navigation removed per request */ }
          {[]?.map((item) => (
            <button
              key={item?.id}
              onClick={() => {
                if (item?.id) scrollToSection(item.id);
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={activeSection === item?.id ? 'page' : undefined}
              className={buttonStyles(item?.id ?? '')}
            >
              <span className="relative z-10">{item?.label}</span>
            </button>
          ))}
        </nav>

  {/* Mobile Menu Button (hidden on desktop) */}
  <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className={cn(
                  "relative w-10 h-10 rounded-full",
                  "border border-transparent",
                  "hover:border-accent/30 hover:bg-accent/10",
                  "transition-all duration-300"
                )}
              >
                <HamburgerIcon isOpen={isOpen} />
              </Button>
            </SheetTrigger>

            {/* Responsive sheet content: compact on mobile, large overlay on desktop */}
            <SheetContent
              side="right"
              className={cn(
                "w-full max-w-xs md:max-w-none md:inset-0 md:h-screen md:p-8",
                "border-accent/20 bg-background/95 backdrop-blur-md p-6 md:bg-background/80"
              )}
            >
              {/* Close button + header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={originLogo} alt="Origin" className="h-10 w-auto" />
                  <div className="hidden md:block">
                    <div className="text-lg font-normal">The Origin</div>
                    <div className="text-sm text-muted-foreground">Stories that connect</div>
                  </div>
                </div>
                <div className="md:hidden">
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
                    ✕
                  </Button>
                </div>
              </div>

              {/* Desktop full-panel layout */}
              <div className="mt-8 md:mt-12">
                <div className="md:flex md:space-x-8">
                  {/* Left column - feature / intro */}
                  <div className="md:w-1/3 hidden md:block">
                    <h3 className="text-2xl font-normal mb-4">Explore</h3>
                    <p className="text-muted-foreground">Jump to episodes, hosts, resources and more. Smooth keyboard and mouse navigation supported.</p>
                    <div className="mt-6">
                      <a href="#contact" onClick={() => setIsOpen(false)} className="inline-block px-4 py-2 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition">Get in touch</a>
                    </div>
                  </div>

                  {/* Right column - grid of links */}
                  <div className="md:flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {/* Example menu items - mirror site structure: Episodes, Hosts, About, Make Podcast, Launchpad, Contact */}
                      {[
                        { title: 'Hosts', links: [{label: 'Meet the Host', href: '#host'}, {label: 'Guest Stories', href: '#'}] },
                        { title: 'About', links: [{label: 'About us', href: '#about'}, {label: 'Our Mission', href: '#'}] },
                        { title: 'Make Podcast', links: [{label: 'Services', href: '#make'}, {label: 'Pricing', href: '#'}] },
                        { title: 'Launchpad', links: [{label: 'Launch Services', href: '#launch'}, {label: 'Case Studies', href: '#'}] },
                        { title: 'Contact', links: [{label: 'Studio & Booking', href: '#contact'}, {label: 'Press', href: '#'}] },
                      ].map((col, i) => (
                        <div key={i} className="group">
                          <h4 className="text-lg font-normal mb-3 group-hover:text-accent transition">{col.title}</h4>
                          <ul className="space-y-2">
                            {col.links.map((lnk, idx) => (
                              <li key={idx}>
                                <a href={lnk.href} onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md hover:bg-accent/5 transition-transform transform hover:translate-x-1">{lnk.label}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;