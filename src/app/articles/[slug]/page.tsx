import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/layout/article-layout";
import { mdxComponents } from "@/components/mdx/mdx-components";

const articlesDir = path.join(process.cwd(), "content/articles");

export async function generateStaticParams() {
  const files = fs.readdirSync(articlesDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(articlesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return {
    title: data.title,
    description: data.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(articlesDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const wordCount = content.split(/\s+/).filter(Boolean).length;

  return (
    <ArticleLayout
      frontmatter={
        data as {
          title: string;
          date: string;
          summary?: string;
          coAuthor?: string;
          coAuthorLink?: string;
        }
      }
      wordCount={wordCount}
    >
      <MDXRemote source={content} components={mdxComponents} />
    </ArticleLayout>
  );
}
