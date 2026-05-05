"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface ArticleFrontmatter {
  title: string;
  date: string;
  summary?: string;
  coAuthor?: string;
  coAuthorLink?: string;
}

export function ArticleLayout({
  children,
  frontmatter,
  wordCount,
}: {
  children: React.ReactNode;
  frontmatter: ArticleFrontmatter;
  wordCount: number;
}) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[100] h-[3px] bg-blue-500"
        style={{ width: mounted ? `${progress}%` : "0%" }}
      />

      <article className="min-h-screen px-4 pt-10 pb-24 sm:px-6">
        <div className="mx-auto max-w-[72ch]">
          <button
            onClick={() => router.back()}
            className="mb-8 inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11L5 7l4-4" />
            </svg>
            Writing
          </button>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground/60 tracking-wide">
              <time>{frontmatter.date}</time>
              <span aria-hidden>·</span>
              <span>{readingTime} min read</span>
            </div>

            <h1 className="mb-5 text-[1.9rem] font-bold leading-[1.2] tracking-tight sm:text-[2.4rem]">
              {frontmatter.title}
            </h1>

            {frontmatter.summary && (
              <p className="text-[1.1rem] leading-relaxed text-muted-foreground">
                {frontmatter.summary}
              </p>
            )}

            {frontmatter.coAuthor && (
              <p className="mt-5 text-sm text-muted-foreground">
                Co-authored with{" "}
                {frontmatter.coAuthorLink ? (
                  <a
                    href={frontmatter.coAuthorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2 hover:text-blue-500 transition-colors"
                  >
                    {frontmatter.coAuthor}
                  </a>
                ) : (
                  <span className="text-foreground">{frontmatter.coAuthor}</span>
                )}
              </p>
            )}

            <div className="mt-10 h-px bg-border" />
          </header>

          <div>{children}</div>
        </div>
      </article>
    </>
  );
}
