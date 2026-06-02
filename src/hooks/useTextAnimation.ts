import { useRef } from "react";
import { animateText, TextEffect } from "@/lib/textAnimations";

export function useTextAnimation() {
  const ref = useRef<HTMLSpanElement[]>([]);

  const setRef = (el: HTMLSpanElement | null) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  const play = (effect: TextEffect) => {
    animateText(ref.current, effect);
  };

  const reset = () => {
    ref.current = [];
  };

  return { setRef, play, reset };
}