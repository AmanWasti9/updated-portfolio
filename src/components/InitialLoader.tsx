import { useEffect, useState } from "react";

export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("hasLoaded", "true");
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <div className="flex gap-4 mb-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-6 h-6 bg-[#ff6b00] animate-float-load"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <h1 className="uppercase text-white text-lg md:text-xl font-mono tracking-widest text-center px-4 animate-pulse">
        Hi, I'm syed amanullah wasti
      </h1>
    </div>
  );
}
