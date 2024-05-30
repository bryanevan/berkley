import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "../../public/assets/fonts/fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Berkley",
    default: "Berkley",
  },
  description: "Check out my smart portfolio website with a custom AI chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-Nohemi font-thin"}>
        {" "}
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="mx-auto max-w-3xl px-3 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
