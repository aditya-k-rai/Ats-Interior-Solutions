import type { Metadata } from "next";
import { BudgetEstimator } from "@/components/BudgetEstimator";

export const metadata: Metadata = {
  title: "Interior Cost Calculator",
  description: "Estimate a practical budget range for interiors, modular kitchen, wardrobes, false ceiling, bathroom, wallpaper or office interior projects."
};

export default function CostCalculatorPage() {
  return (
    <main className="bg-porcelain">
      <section className="hero-image min-h-[55vh] text-white flex items-center py-20">
        <div className="section-shell w-full pt-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Interactive Budget Estimator</p>
              <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold leading-tight">Estimate before you enquire</h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
                Calculate an accurate investment range for turnkey interiors, modular kitchens, wardrobes, and civil renovations up to 6,000 SQFT.
              </p>
            </div>

            <div className="rounded-2xl glass-dark p-6 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">100% Price Lock Guarantee</span>
              <h3 className="font-display text-2xl text-white font-bold mt-1">Instant BOQ Calculation</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Floor limit guards: ₹10L for Full Home Interiors, ₹5L for Modular Kitchens, using IS 710 BWP plywood & Action Tesa HDHMR.
              </p>
            </div>
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
