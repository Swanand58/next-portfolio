"use client";

import Link from "next/link";
import { Article } from "@/data/articles";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="m-2 flex flex-col justify-between transition-colors hover:bg-accent/50">
      <CardHeader className="pb-2">
        <p className="text-sm text-muted-foreground">{article.date}</p>
        <CardTitle className="mt-4 text-lg font-bold leading-tight">
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="my-2 line-clamp-4 text-muted-foreground">
          {article.summary}
        </p>
      </CardContent>
      <CardFooter className="pt-2">
        {article.isExternal ? (
          <Button variant="link" className="h-auto p-2" asChild>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold"
            >
              Read article
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        ) : (
          <Button variant="link" className="h-auto p-2" asChild>
            <Link
              href={article.link}
              className="flex items-center gap-1 font-semibold"
            >
              Read article
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
