import type { MDXComponents } from "mdx/types";
import { ArticleImage } from "./article-image";
import { RelicDiagram } from "./relic-diagram";

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-12 mb-5 border-l-[3px] border-blue-500 pl-4 text-2xl font-bold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-[1.05rem] leading-[1.85] text-foreground/90 sm:text-lg">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 space-y-2 pl-5 [list-style:disc] marker:text-blue-500">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 space-y-2 pl-5 [list-style:decimal] marker:font-semibold marker:text-blue-500">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-[1.05rem] leading-relaxed text-foreground/90 sm:text-lg">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children }) => (
    <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-500 dark:text-blue-300">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-8 overflow-x-auto rounded-2xl bg-muted p-6 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-blue-500/40 pl-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-blue-500 underline underline-offset-2 hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  ),
  hr: () => <div className="my-12 h-px bg-border" />,
  ArticleImage,
  RelicDiagram,
};
