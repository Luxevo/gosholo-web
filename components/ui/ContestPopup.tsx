"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface ContestPopupProps {
  isOpen: boolean
  onClose: () => void
  onViewContest: () => void
}

export function ContestPopup({ isOpen, onClose, onViewContest }: ContestPopupProps) {
  const handleViewContest = () => {
    onClose()
    setTimeout(() => {
      onViewContest()
    }, 100)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md w-[95vw] max-w-[400px] p-0 overflow-hidden border-0 mx-auto"
        role="dialog"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <div className="relative">
          <Image
            src="/images/concours-popup.png"
            width={400}
            height={500}
            alt="Concours Osheaga - Shop local avec Gosholo"
            className="w-full h-auto object-cover max-h-80 sm:max-h-96"
          />
          <div className="p-4" style={{ backgroundColor: "#016167" }}>
            <Button
              size="default"
              className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gosholo-dark-teal transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-sm sm:text-base py-3"
              onClick={handleViewContest}
              aria-label="Voir les détails du concours Osheaga"
            >
              Voir les détails du concours
              <ChevronRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
