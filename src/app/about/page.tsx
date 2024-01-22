import Experience from "@/components/About/Experience";
import Publications from "@/components/About/Publications";
import Skills from "@/components/About/Skills";
import { siteConfig } from "@/constants/config";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | John Doe",
};

export default function About() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left">
        <div>
          <h1 className="mb-0">John Doe</h1>
          <h2 className="mt-2 mb-0">Full Stack Developer</h2>
        </div>
        <Image
          className="rounded-full h-48 w-48 md:h-24 md:w-24 md:my-0 mb-4 mt-0"
          alt={siteConfig.title}
          src={siteConfig.profileImage}
          width={512}
          height={512}
        />
      </div>

      <Skills />

      <Experience />

      <Publications />
    </div>
  );
}
