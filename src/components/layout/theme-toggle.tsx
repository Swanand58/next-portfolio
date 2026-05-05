"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    const nextTheme = theme === "dark" ? "light" : "dark";

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };

    if (!doc.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    doc.startViewTransition(() => {
      setTheme(nextTheme);
    });

    const style = document.createElement("style");
    style.textContent = `
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
      }
      ::view-transition-new(root) {
        clip-path: circle(0px at ${x}px ${y}px);
        animation: theme-blast 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      @keyframes theme-blast {
        to { clip-path: circle(150vmax at ${x}px ${y}px); }
      }
    `;
    document.head.appendChild(style);
    setTimeout(() => style.remove(), 1000);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9"
      onClick={handleToggle}
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
