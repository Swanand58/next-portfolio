"use client";

import { useEffect, useState } from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

export function CursorTrail() {
  const [isMounted, setIsMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsTouch('ontouchstart' in window);
  }, []);

  if (!isMounted || isTouch) return null;

  return (
    <MouseTrail
      lineDuration={0.8}
      lineWidthStart={4}
      strokeColor="rgba(147, 197, 253, 0.5)"
      lag={0}
    />
  );
}
