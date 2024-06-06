import Link from "next/link";
import AIChatButton from "./AIChatButton";
import ThemeToggle from "./ThemeToggle";
import "../app/globals.css";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-7 tracking-widest">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/works">WORKS</Link>
        </nav>
        <div className="flex items-center gap-4">
          <AIChatButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
