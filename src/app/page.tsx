import me from "@/assets/me.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Berkley",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">BERKLEY</H1>
          <p className="tracking-wider sm:text-start">
            Developer
            <br></br>
            Machine Learning
            <br></br>
            Professional Fruit Slicer
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center tracking-wider">
        <H2>VEEBEE WILL ANSWER ANY QUESTIONS ABOUT BERKLEY. </H2>
        <p>
          Click the <Bot className="inline pb-1" /> icon in the top bar to
          activate VeeBee. He knows Berkley pretty well, and can even provide
          links to pages you&apos;re looking for.
        </p>
      </section>
    </section>
  );
}
