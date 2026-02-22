"use client";

import { IconType } from "react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  Icon: IconType;
  link: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  Icon,
  link,
  onClick,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-colors hover:bg-accent/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8 shrink-0 text-primary" />
          <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-3">
        <Button variant="link" className="h-auto p-0" asChild>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className="flex items-center gap-1 text-sm font-medium"
          >
            View Project
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
