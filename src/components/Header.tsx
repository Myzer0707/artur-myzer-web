import { useState } from "react"
import { Home, GraduationCap, Building2, User, ClipboardCheck } from "lucide-react"
import { MenuBar } from "@/components/ui/glow-menu"

const menuItems = [
  {
    icon: Home,
    label: "Start",
    href: "/",
    gradient:
      "radial-gradient(circle, rgba(27,107,125,0.2) 0%, rgba(27,107,125,0.08) 50%, rgba(27,107,125,0) 100%)",
    iconColor: "text-[#1B6B7D]",
  },
  {
    icon: ClipboardCheck,
    label: "Scorecard",
    href: "/ai-readiness-scorecard",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: GraduationCap,
    label: "Protokoły",
    href: "/protokol-01-google-workspace",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: Building2,
    label: "Dla firm",
    href: "/dla-firm",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: User,
    label: "Artur",
    href: "/artur",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

export default function Header() {
  const [activeItem, setActiveItem] = useState<string>("Start")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-4">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <a
          href="/"
          className="font-display font-semibold text-lg tracking-tight text-white whitespace-nowrap"
        >
          artur<span className="text-[#1B6B7D]">myzer</span>.ai
        </a>

        {/* Glow Menu */}
        <MenuBar
          items={menuItems}
          activeItem={activeItem}
          onItemClick={setActiveItem}
        />
      </div>
    </header>
  )
}
