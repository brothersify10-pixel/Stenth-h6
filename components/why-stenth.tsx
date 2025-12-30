"use client";
import { BarChart3, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export default function WhySTENTH() {
  const pillars = [
    { icon: BarChart3, title: "Business Analysis & Growth Strategy", description: "insights for maximum ROI." },
    { icon: Target,    title: "Complete Brand Management",           description: "social, ads, content, handled end-to-end." },
    { icon: TrendingUp,title: "Monthly Performance Reviews",         description: "transparent lead and conversion tracking." },
    { icon: Zap,       title: "Scalable Roadmaps",                   description: "strategies built on data, not assumptions." },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Partner With{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              STENTH?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-6">
                <p.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{p.title}</h3>
              <p className="text-slate-300 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors duration-300"
          >
            See How We Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
