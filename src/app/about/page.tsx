import m2 from "../../../public/assets/m2.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Berkley and his interests.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          Endlessly curious and persistent with a love for knowledge and chasing
          elusive answers. With a background in machine learning and economics,
          I&apos;ve spent the last 3 years curating my full-stack abilities to
          be a contributing member of a development team by building web
          applications in React, Angular and Python. As I continuously refine my
          skills in discovering beautiful solutions to complex problems, I look
          around to see who I can teach and bring with me in building better
          systems and software, and have fun while doing it. Thank you for
          reading, and please reach out to me to collaborate!{" "}
          <a
            href="mailto:dev@berkley.pro"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 hover:underline"
          >
            Email me
          </a>
          .
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a Full-stack Web Developer and Machine Learning Engineer
          specializing in <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>Node.js</strong>, and <strong>Python</strong>.
        </p>
        <p>
          Click to download my{" "}
          <a
            className="text-red-500 hover:underline"
            href="/assets/Resume.pdf"
            download="Berkley_Bryan_Resume.pdf"
          >
            Resume
          </a>
        </p>
      </section>
      <hr className="border-muted" />
      <section>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://devpjkr4qfp.contra.com/?isInternalTraffic=true&openThemePicker=true&utm_campaign=independent_portfolio_palette_icon&utm_medium=contra&utm_source=username_projects&openCustomizationSidebarScreen=closed"
              className="text-primary hover:underline"
            >
              Contra
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bryanevan"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bryan-berkley/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love surfing, hiking the beautiful ridges and
          valleys of Hawaii, and traveling when I have the chance. I&apos;ve
          enjoyed living in different countries throughout the years, from
          Mexico, to Portugal, and even Vietnan. These have been some of my
          favorite experiences in life and I&apos;ve helped several friends
          research and find ways to do the same, which has been incredidbly
          rewarding. I also enjoy art and design, which are big inspirations for
          many of the projects I work on.
        </p>
        <p>
          I&apos;m also an advocate of self-improvement, nutrition, and positive
          psychology.
        </p>
        <Image
          src={m2}
          alt="photo of me"
          className="mx-auto w-full max-w-sm rounded-md md:max-w-md lg:max-w-lg"
        />{" "}
      </section>
    </section>
  );
}
