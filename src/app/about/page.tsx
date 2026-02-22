"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: Github, href: "https://github.com/Swanand58", label: "GitHub" },
  {
    icon: Twitter,
    href: "https://twitter.com/swanandkhonde_",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/swanandkhonde/",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Swanand58/",
    label: "LeetCode",
  },
  { icon: Mail, href: "mailto:swanandkhonde1999@gmail.com", label: "Email" },
];

export default function About() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      {/* Hero Section */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="relative mb-6 h-56 w-56 overflow-hidden rounded-full border-4 border-primary/20 sm:h-64 sm:w-64">
          <Image
            src="https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSNdGBOIyhYtQn0B6lU7bCGvW5zAaTZRx9Spye"
            alt="Swanand Khonde"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">About Me</h1>

        {/* Social Links */}
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="outline" size="icon" asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Content - Full width */}
      <div className="mx-auto max-w-3xl space-y-5 text-center text-base leading-relaxed">
        <p>
          I&apos;m currently a Software Engineer at{" "}
          <span className="font-semibold">Ford Motor Company</span>, where I
          build full-stack applications for Advanced EV Systems. I graduated
          with a Master&apos;s in Computer Science from{" "}
          <span className="font-semibold">Rice University</span> and hold a
          Bachelor&apos;s in Computer Engineering from Vishwakarma Institute of
          Technology, Pune.
        </p>

        <p>
          Before Ford, I was a{" "}
          <span className="font-semibold">
            founding engineer at Nedd Technologies
          </span>
          , where I built an ESG platform from the ground up. Prior to that, I
          spent two years at{" "}
          <span className="font-semibold">HSBC Technology India</span> as a Full
          Stack Engineer, developing microservices for trade reporting systems.
          I was recognized with the{" "}
          <span className="font-semibold">Star Performer</span> award in Q1
          2023.
        </p>

        <p>
          My go-to stack includes Python, TypeScript, React, Next.js, FastAPI,
          and GCP—but I enjoy picking up whatever tools get the job done.
        </p>

        <p>
          Outside of work, music keeps me balanced. I play guitar and have an
          eclectic playlist that ranges from Linkin Park and Metallica to
          Bollywood classics by Sonu Nigam, KK, and Shreya Ghoshal.
        </p>
      </div>
    </main>
  );
}
