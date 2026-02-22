"use client";

import Image from "next/image";
import { workExperiences, WorkExperienceType } from "@/data/work-experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function WorkExperienceList() {
  return (
    <Card className="transition-colors hover:bg-accent/50">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 border-b border-border pb-3 text-xl">
          <Briefcase className="h-5 w-5" />
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4 py-4">
          {workExperiences.map((experience: WorkExperienceType) => (
            <li key={experience.id} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  width={40}
                  height={40}
                  src={experience.companyLogo}
                  alt={`${experience.companyName} Logo`}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{experience.companyName}</p>
                  <p className="text-xs text-muted-foreground italic">
                    {experience.role}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                {experience.duration}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
