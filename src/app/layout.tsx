import EmailButton from "@/components/EmailButton";
import GitHubIcon from "@/components/Icons/GitHub";
import LinkedInIcon from "@/components/Icons/LinkedIn";
import { siteConfig } from "@/constants/config";
import { Routes } from "@/constants/router";
import classNames from "classnames";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.profileImage,
        width: 512,
        height: 512,
        alt: siteConfig.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          raleway.className,
          "bg-bg-1 text-text-1 container min-h-screen flex flex-col"
        )}
      >
        <nav className="border-b pb-4 border-b-bg-2">
          <ul className="flex gap-4 mt-12">
            <li className="hover:text-bg-4">
              <Link href={Routes.HOME}>home</Link>
            </li>
            <li className="hover:text-bg-4">
              <Link href={Routes.ABOUT}>about</Link>
            </li>
            {/* <li className="hover:text-bg-4">
              <Link href={Routes.BLOG}>blog</Link>
            </li> */}
          </ul>
        </nav>
        <main className="py-12">{children}</main>
        <footer className="mb-12 border-t mt-auto flex flex-row items-center gap-4 justify-between border-t-bg-2 pt-4 text-sm">
          <div>
            <p>{siteConfig.title}</p>
            <p>{siteConfig.location}</p>
          </div>

          <div className="flex items-center gap-4">
            <EmailButton />
            <a
              target="_blank"
              href={siteConfig.profiles.github}
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="inline-block w-6 h-6 fill-text-1 hover:fill-bg-4" />
            </a>
            <a
              target="_blank"
              href={siteConfig.profiles.linkedin}
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="inline-block w-6 h-6 fill-text-1 hover:fill-bg-4" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
