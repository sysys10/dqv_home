import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
  return (
    <header className="h-16 w-full bg-[#647AE1]">
      <nav className="flex max-w-6xl mx-auto items-center justify-between h-full">
        <div className="flex items-center gap-4">
          <Image
            src="/dqv_logo.png"
            alt="다큐브 QV-1"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center gap-4 text-lg font-bold text-white">
          <Link href="/#customer-cases">고객사례</Link>
          <Link href="/#news">소식</Link>
          <Link href="/">블로그</Link>
        </div>
      </nav>
    </header>
  );
}
