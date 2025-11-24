"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutGosholoSection } from "@/components/sections/AboutGosholoSection";
import { AppLaunchSection } from "@/components/sections/AppLaunchSection";
import { AppDownloadModal } from "@/components/ui/AppDownloadModal";
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
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

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
          onOpenAppModal={() => setIsAppModalOpen(true)}
        />

        {/* About Gosholo Section */}
        <AboutGosholoSection />

        {/* App Launch Section */}
        <AppLaunchSection onOpenAppModal={() => setIsAppModalOpen(true)} />

        {/* Newsletter Section - Positioned strategically */}
        <section
          id="newsletter"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-light-green"
          role="region"
          aria-labelledby="newsletter-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-gosholo-primary px-4 py-2 mb-4">
                <Mail className="mr-2 h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  {t("newsletter.badge")}
                </span>
              </div>
              <h2
                id="newsletter-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gosholo-primary leading-tight"
              >
                {t("newsletter.title")}
              </h2>
              <p className="max-w-[700px] text-gosholo-primary/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                {t("newsletter.description")}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl border-4 border-gosholo-primary/30">
                <div className="p-4 sm:p-6 md:p-8">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* App Download Modal */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
      />
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
