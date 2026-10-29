"use client";

import React from "react";
import { ARCHITECTURE_CODE } from "@/data/portfolioData";

interface CodeSpecSectionProps {
  theme: "dark" | "light";
}

export default function CodeSpecSection({ theme }: CodeSpecSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="space-y-4" id="topology">
      <div className="flex items-center justify-between">
        <h2
          className={`text-xl font-bold flex items-center gap-2 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          <span
            className={`font-mono ${isDark ? "text-cyan-400" : "text-brand-600"}`}
          >
            04.
          </span>{" "}
          Configuration &amp; Architecture Spec
        </h2>
        <span
          className={`text-xs font-mono ${
            isDark ? "text-cyan-400/80" : "text-brand-600"
          }`}
        >
          interactive preview
        </span>
      </div>

      {/* Code Block Window */}
      <div
        className={`rounded-lg border bg-[#060a12] text-slate-200 overflow-hidden shadow-xl font-mono text-xs ${
          isDark ? "border-slate-800 shadow-black/40" : "border-slate-800 shadow-black/10"
        }`}
      >
        {/* Tabs Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-slate-400 text-[11px]">
              {ARCHITECTURE_CODE.filename}
            </span>
          </div>
          <span className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">
            {ARCHITECTURE_CODE.language}
          </span>
        </div>

        {/* Preformatted Code */}
        <pre className="p-4 overflow-x-auto text-xs leading-relaxed font-mono">
          <code>
            <span className="text-slate-500">{ARCHITECTURE_CODE.comment}</span>
            {"\n"}
            <span className="text-cyan-400">namespace</span> App\Services;{"\n\n"}
            <span className="text-cyan-400">use</span> App\Models\Project;{"\n"}
            <span className="text-cyan-400">use</span> Illuminate\Support\Carbon;{"\n"}
            <span className="text-cyan-400">use</span> Illuminate\Support\Facades\DB;{"\n\n"}
            <span className="text-cyan-400">class</span>{" "}
            <span className="text-emerald-400">SimjuFinancialService</span> {"{"}
            {"\n"}
            {"    "}<span className="text-cyan-400">public function</span>{" "}
            <span className="text-emerald-400">getProjectSummary</span>(int $projectId, int $year): array {"{"}
            {"\n"}
            {"        "}<span className="text-cyan-400">return</span> DB::transaction(
            <span className="text-cyan-400">function</span> () <span className="text-cyan-400">use</span> ($projectId, $year) {"{"}
            {"\n"}
            {"            "}$project = Project::with([<span className="text-emerald-400">&apos;transactions&apos;</span>])-&gt;findOrFail($projectId);{"\n\n"}
            {"            "}$income = $project-&gt;transactions(){"\n"}
            {"                "}-&gt;where(<span className="text-emerald-400">&apos;type&apos;</span>, <span className="text-emerald-400">&apos;income&apos;</span>){"\n"}
            {"                "}-&gt;whereYear(<span className="text-emerald-400">&apos;transaction_date&apos;</span>, $year){"\n"}
            {"                "}-&gt;sum(<span className="text-emerald-400">&apos;amount&apos;</span>);{"\n\n"}
            {"            "}$expense = $project-&gt;transactions(){"\n"}
            {"                "}-&gt;where(<span className="text-emerald-400">&apos;type&apos;</span>, <span className="text-emerald-400">&apos;expense&apos;</span>){"\n"}
            {"                "}-&gt;whereYear(<span className="text-emerald-400">&apos;transaction_date&apos;</span>, $year){"\n"}
            {"                "}-&gt;sum(<span className="text-emerald-400">&apos;amount&apos;</span>);{"\n\n"}
            {"            "}$netCashflow = $income - $expense;{"\n"}
            {"            "}$margin = $income &gt; 0 ? ($netCashflow / $income) * 100 : 0.0;{"\n\n"}
            {"            "}<span className="text-cyan-400">return</span> [ {"\n"}
            {"                "}<span className="text-emerald-400">&apos;project_name&apos;</span>  =&gt; $project-&gt;name,{"\n"}
            {"                "}<span className="text-emerald-400">&apos;total_income&apos;</span>  =&gt; $income,{"\n"}
            {"                "}<span className="text-emerald-400">&apos;total_expense&apos;</span> =&gt; $expense,{"\n"}
            {"                "}<span className="text-emerald-400">&apos;net_cashflow&apos;</span>  =&gt; $netCashflow,{"\n"}
            {"                "}<span className="text-emerald-400">&apos;margin_pct&apos;</span>    =&gt; round($margin, 2),{"\n"}
            {"                "}<span className="text-emerald-400">&apos;status&apos;</span>        =&gt; <span className="text-emerald-400">&apos;AUDITED&apos;</span>,{"\n"}
            {"            "}];{"\n"}
            {"        "}{"}"});{"\n"}
            {"    "}{"}"}{"\n"}
            {"}"}
          </code>
        </pre>
      </div>
    </section>
  );
}
