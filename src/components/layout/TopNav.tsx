"use client";

import Image from "next/image";
import Link from "next/link";
import { useYheight } from "@/hooks/useYheight";

export default function TopNav() {
  const yHeight = useYheight();

  return (
    <header
      style={{
        backgroundColor: yHeight > 0 ? "#647AE1" : "transparent",
        color: yHeight > 0 ? "white" : "black",
      }}
      className="h-16 fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 border-gray-200"
    >
      <nav className="flex max-w-6xl mx-auto items-center justify-between h-full">
        <div className="flex items-center gap-4">
          <Image
            style={{
              filter: yHeight > 0 ? "invert(0)" : "invert(1)",
            }}
            src="/dqv_logo.png"
            alt="다큐브 QV-1"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center gap-4 text-lg font-bold">
          <Link href="/#customer-cases">고객사례</Link>
          <Link href="/#news">소식</Link>
          <Link href="/">블로그</Link>
        </div>
      </nav>
    </header>
  );
}
