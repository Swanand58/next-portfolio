"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ParticlesBackground } from "./particles-background";
import { SocialLinks } from "./social-links";
import { AnimatedText } from "./animated-text";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-background">
      <ParticlesBackground />
      
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-56px)] max-w-7xl flex-col lg:flex-row lg:items-start lg:gap-8 lg:pt-16">
        {/* Left Content */}
        <div className="flex flex-1 flex-col px-6 py-8 sm:px-12 lg:px-16 lg:py-0">
          <motion.h1 
            className="mb-8 text-3xl font-bold leading-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedText
              words={[
                "Software Engineer",
                "Technology Enthusiast",
                "Aspiring Musician",
                "Full-Stack AI Engineer",
              ]}
            />
          </motion.h1>
          
          <div className="flex flex-1 flex-col justify-center">
            <p className="mb-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m Swanand Sanjay Khonde, accomplished software engineer with
              a proven track record of developing and implementing both frontend
              and backend solutions. Known for working with limited direction
              while understanding and executing a business vision to build
              market-ready applications. Capable of leading projects from
              conception to completion and poised for future leadership roles.
            </p>
            
            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex flex-1 items-start justify-center px-4 lg:px-0">
          <div className="group relative">
            {/* Decorative geometric shapes */}
            <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            
            {/* Dotted pattern background */}
            <div className="absolute -inset-8 opacity-30">
              <div className="h-full w-full" style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} />
            </div>
            
            {/* Main image container */}
            <div className="relative h-[400px] w-[350px] sm:h-[500px] sm:w-[420px] lg:h-[550px] lg:w-[480px]">
              {/* Accent lines */}
              <div className="absolute -left-3 top-12 h-32 w-1 rounded-full bg-primary/20" />
              <div className="absolute -right-3 bottom-24 h-24 w-1 rounded-full bg-primary/20" />
              <div className="absolute -top-3 left-16 h-1 w-20 rounded-full bg-primary/20" />
              
              <Image
                src="https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSuo5NVYDtZJCXyI5lfBDiWwjRp3GYSosKErzv"
                alt="Swanand Khonde"
                fill
                className="object-contain object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
