"use client";

import { skills, SkillSet } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export function SkillsList() {
  return (
    <Card className="transition-colors hover:bg-accent/50">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 border-b border-border pb-3 text-xl">
          <Settings className="h-5 w-5" />
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 py-4">
          {skills.map((skill: SkillSet) => (
            <div key={skill.id} className="flex items-center gap-4">
              <skill.icon className="h-6 w-6 shrink-0" />
              <span className="font-semibold">{skill.description}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
