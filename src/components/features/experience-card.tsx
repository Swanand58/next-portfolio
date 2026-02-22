"use client";

import Image from "next/image";
import { Experience } from "@/data/experience";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  // Separate subheadings from regular achievements
  const processedAchievements = experience.achievements.map((achievement) => ({
    text: achievement,
    isSubheading: achievement.startsWith("<b>"),
  }));

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Image
            width={56}
            height={56}
            src={experience.companyLogo}
            alt={`${experience.company} Logo`}
            className="rounded-xl border bg-white p-1"
          />
          <div className="flex-1 space-y-1">
            <h2 className="text-xl font-bold tracking-tight">
              {experience.company}
            </h2>
            <p className="text-sm text-muted-foreground">
              {experience.location}
            </p>
            <p className="text-sm font-medium">
              {experience.role}{" "}
              <span className="text-muted-foreground">• {experience.period}</span>
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Skills Badges */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <Separator />

        {/* Achievements */}
        <div className="space-y-3">
          {processedAchievements.map((item, index) =>
            item.isSubheading ? (
              <h3
                key={index}
                className="pt-2 text-sm font-semibold"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            ) : (
              <div key={index} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
