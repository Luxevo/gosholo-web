"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutGosholoSection } from "@/components/sections/AboutGosholoSection";
import { ClientWrapper } from "@/components/ClientWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { usePopupTimer } from "@/hooks/usePopupTimer";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function HomeContent() {
  const { isVisible } = useScrollAnimation();
  const { isOpen, setIsOpen } = usePopupTimer();
  const { t, tArray } = useTranslation();
  const router = useRouter();

  // Gérer la navigation vers les sections avec les ancres
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 64;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 64; // Hauteur approximative du header
      const elementPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleViewContest = () => {
    scrollToSection("contest");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main>
        <HeroSection
          isVisible={isVisible}
          onScrollToSection={scrollToSection}
        />

        {/* About Gosholo Section */}
        <AboutGosholoSection />


        {/* CTA Section */}
        <section
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gosholo-orange text-white"
          role="region"
          aria-labelledby="cta-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-4">
                <h2
                  id="cta-title"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
                >
                  {t("cta.newTitle")}
                </h2>
                <p className="max-w-[800px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {t("cta.newDescription")}
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-gosholo-orange hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group touch-target-44 text-base sm:text-lg px-8 py-4"
                onClick={() => scrollToSection("newsletter")}
                aria-label={t("cta.signupButton")}
              >
                <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                {t("cta.signupNow")}
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section - Now at the bottom */}
        <section
          id="newsletter"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-primary"
          role="region"
          aria-labelledby="newsletter-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <h2
                id="newsletter-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-light-green"
              >
                {t("newsletter.title")}
              </h2>
              <p className="max-w-[700px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                {t("newsletter.description")}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="p-4 sm:p-6 md:p-8">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default function Home() {
  return (
    <ClientWrapper>
      <HomeContent />
    </ClientWrapper>
  );
}
