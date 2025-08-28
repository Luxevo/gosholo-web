"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gosholo-primary to-gosholo-primary/90 flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/images/gosholo-logo.png"
          alt="Gosholo"
          width={180}
          height={60}
          className="h-14 w-auto"
          priority
        />
      </div>

      {/* Content */}
      <div className="text-center text-white max-w-md mb-12">
        <h1 className="text-3xl font-bold mb-6">
          Téléchargez gosholo
        </h1>
        <p className="text-lg text-white/90 leading-relaxed">
          L'application qui connecte les consommateurs aux commerces locaux
        </p>
      </div>

      {/* Download Buttons */}
      <div className="space-y-4 w-full max-w-sm">
        <Button 
          size="lg" 
          className="w-full bg-gosholo-orange text-white hover:bg-gosholo-orange/90 h-14 text-lg font-semibold"
        >
          <Download className="mr-3 h-6 w-6" />
          App Store
        </Button>
        <Button 
          size="lg" 
          className="w-full bg-gosholo-orange text-white hover:bg-gosholo-orange/90 h-14 text-lg font-semibold"
        >
          <Download className="mr-3 h-6 w-6" />
          Google Play
        </Button>
      </div>

      {/* Simple footer */}
      <div className="mt-16 text-center">
        <p className="text-white/60 text-sm">
          © 2024 gosholo
        </p>
      </div>
    </div>
  )
}