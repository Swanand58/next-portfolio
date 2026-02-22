"use client";

import { ContactCards } from "@/components/features/contact-card";
import { CursorTrail } from "@/components/features/cursor-trail";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <CursorTrail />
      <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center p-4 sm:p-8">
        <div className="mx-auto w-full max-w-4xl">
          {/* Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Have a question or want to work together? Feel free to reach out
              through any of these platforms. I typically respond within 24 hours.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <ContactCards />
        </div>
      </main>
    </>
  );
}
