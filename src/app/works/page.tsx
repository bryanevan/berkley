import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Works",
  description: "My past work and future plans.",
};

export default function Page() {
  return (
    <section className="space-y-6 tracking-widest">
      <H1>Past Projects</H1>
      <section className="space-y-3">
        <H2>1st Project</H2>
        <p>something about it</p>
      </section>
      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>2nd Project</H2>
        <p>something about it</p>
      </section>
      <section className="space-y-3">
        <hr className="border-muted" />
        <H2>Side projects</H2>
        <p>
          I have been spending a great deal of time exploring the intersection
          of machine learning and web development; searching for ways to bring
          the two together in a way that is both useful and practical for end
          users of varying demographics and technological skill. There are many
          problems that can be solved with the right combination of machine
          learning and web development, and I am excited to be a part of the
          solution.{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://picform.co"
              className="text-primary hover:underline"
            >
              Picform.co
            </a>{" "}
            - An AI-powered image modification and generation app
          </li>
          <li>
            <Link
              href="https://BookSmart.app"
              className="text-primary hover:underline"
            >
              BookSmart.app
            </Link>{" "}
            - A bookmark organization and management app
          </li>
        </ul>
      </section>
      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project or talk about possible
          partnerships, please contact me via email at{" "}
          <a
            href="mailto:dev@berkley.pro"
            className="text-red-500 hover:underline"
          >
            dev@berkley.pro
          </a>
        </p>
      </section>
    </section>
  );
}
