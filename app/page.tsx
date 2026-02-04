"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { GosholoIntroSection } from "@/components/sections/GosholoIntroSection";
import { AboutGosholoSection } from "@/components/sections/AboutGosholoSection";
import { AppLaunchSection } from "@/components/sections/AppLaunchSection";
import { AppDownloadModal } from "@/components/ui/AppDownloadModal";
import { ClientWrapper } from "@/components/ClientWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { usePopupTimer } from "@/hooks/usePopupTimer";
import { useRouter } from "next/navigation";

function HomeContent() {
  const { isVisible } = useScrollAnimation();
  const { isOpen, setIsOpen } = usePopupTimer();
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
      <Header
        isVisible={isVisible}
        onScrollToSection={scrollToSection}
      />

      <main>
        <HeroSection
          isVisible={isVisible}
          onScrollToSection={scrollToSection}
          onOpenAppModal={() => setIsAppModalOpen(true)}
        />

        {/* Gosholo Intro Section */}
        <GosholoIntroSection />

        {/* About Gosholo Section */}
        <AboutGosholoSection onOpenAppModal={() => setIsAppModalOpen(true)} />

        {/* App Launch Section */}
        <AppLaunchSection onOpenAppModal={() => setIsAppModalOpen(true)} />
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
