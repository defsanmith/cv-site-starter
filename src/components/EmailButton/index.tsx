"use client";

import { siteConfig } from "@/constants/config";

export default function EmailButton() {
  const handleEmail = () => {
    window.open("mailto:" + siteConfig.email, "_blank");
  };

  return (
    <button
      className="cursor-pointer px-2 py-1 border rounded-md text-sm border-white"
      onClick={handleEmail}
    >
      Contact Me
    </button>
  );
}
