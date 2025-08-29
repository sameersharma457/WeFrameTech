"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, CheckSquare, UploadCloud, Users, Layers, Target, Settings, HelpCircle, LogOut } from "lucide-react";

const items = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Stages & Checklist", href: "/stages", icon: CheckSquare },
  { name: "Upload Docs", href: "/", icon: UploadCloud },
  { name: "Preferred Vendors", href: "/vendors", icon: Users },
  { name: "Tech Stack", href: "/tech", icon: Layers },
  { name: "Targets", href: "/targets", icon: Target },
  { name: "MAI Settings", href: "/settings", icon: Settings },
  { name: "Pending Questions", href: "/questions", icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-gradient-to-b from-teal-800 to-teal-700 text-white min-h-screen p-6">
      <div className="mb-8 flex items-center justify-center">
        <Image src="/weframetech_logo.jpg" alt="logo" width={120} height={120} priority className="rounded" />
      </div>
      <nav className="space-y-2">
        {items.map((it) => {
          const isActive = pathname === it.href;
          const Icon = it.icon;
          return (
            <Link
              key={it.name}
              href={it.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 transition ${isActive ? "bg-white/20 font-semibold" : "hover:bg-white/10"}`}
            >
              <Icon size={18} />
              <span>{it.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-0 w-full px-6">
        <Link href="/help" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white/10">
          <HelpCircle size={18} />
          <span>Help Center</span>
        </Link>
        <Link href="/logout" className="flex items-center gap-3 rounded-md px-3 py-2 mt-2 hover:bg-red-600">
          <LogOut size={18} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
