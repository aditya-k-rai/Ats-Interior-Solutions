import type { Metadata } from "next";
import { BudgetEstimator } from "@/components/BudgetEstimator";

export const metadata: Metadata = {
  title: "Interior Cost Calculator",
  description: "Estimate a practical budget range for interiors, modular kitchen, wardrobes, false ceiling, bathroom, wallpaper or office interior projects."
};

export default function CostCalculatorPage() {
  return (
    <main className="bg-porcelain">
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Cost calculator</p>
            <h1 className="mt-2 font-display text-6xl">Estimate before you enquire</h1>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell">
          <BudgetEstimator />
        </div>
      </section>
    </main>
  );
}
