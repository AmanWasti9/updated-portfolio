import { Section } from "../portfolio/Section";
import { Activity, GitCommit, Terminal, Zap } from "lucide-react";

export function Stats() {
  const metrics = [
    {
      label: "GITHUB COMMITS",
      value: "2,400+",
      sub: "Past year activity",
      icon: <GitCommit className="w-6 h-6 text-primary" strokeWidth={1.5} />
    },
    {
      label: "VERCEL DEPLOYS",
      value: "40+",
      sub: "Production & Preview",
      icon: <Zap className="w-6 h-6 text-primary" strokeWidth={1.5} />
    },
    {
      label: "ACTIVE REPOS",
      value: "60+",
      sub: "Open source & Private",
      icon: <Terminal className="w-6 h-6 text-primary" strokeWidth={1.5} />
    },
    {
      label: "SYSTEM UPTIME",
      value: "99.9%",
      sub: "Across all hosted apps",
      icon: <Activity className="w-6 h-6 text-primary" strokeWidth={1.5} />
    }
  ];

  return (
    <Section id="stats" label="03 // METRICS" bg="dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-display text-5xl md:text-8xl mb-12">
          engineering <span className="text-primary">stats.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="brutal-card p-6 md:p-8 flex flex-col justify-between aspect-square group bg-background">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-dark border border-border">
                  {m.icon}
                </div>
                <div className="text-xs label-mono opacity-50 group-hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  LIVE
                </div>
              </div>
              <div className="mt-8">
                <div className="text-display text-5xl md:text-6xl mb-3 group-hover:text-primary transition-colors">{m.value}</div>
                <div className="label-mono opacity-80 mb-2">▸ {m.label}</div>
                <div className="text-sm text-muted-foreground">{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
