import { ReactNode } from "react";

export function Section({
  id,
  label,
  children,
  className = "",
  bg = "black",
}: {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  bg?: "black" | "orange" | "dark";
}) {
  const bgClass =
    bg === "orange"
      ? "bg-primary text-primary-foreground"
      : bg === "dark"
      ? "bg-[oklch(0.08_0_0)] text-foreground"
      : "bg-background text-foreground";
  return (
    <section
      id={id}
      className={`relative w-full border-t border-border ${bgClass} ${className}`}
    >
      {label && (
        <div className="label-mono px-6 md:px-12 pt-8 opacity-70 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-current" />
          {label}
        </div>
      )}
      <div className="relative px-6 md:px-12 py-16 md:py-24">{children}</div>
    </section>
  );
}