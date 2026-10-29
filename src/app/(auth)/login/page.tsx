"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090d16] text-slate-200 px-4">
      <div className="w-full max-w-md p-8 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-cyan-500/20">
            H
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">System Portal</h1>
            <p className="text-xs text-slate-400 font-mono">Next.js Route Group: (auth)</p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">
              Developer Email
            </label>
            <input
              type="email"
              defaultValue={PERSONAL_INFO.email}
              readOnly
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm font-mono text-slate-300 focus:outline-none focus:border-cyan-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">
              Access Token / Password
            </label>
            <input
              type="password"
              placeholder="••••••••••••"
              disabled
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm font-mono text-slate-300 focus:outline-none focus:border-cyan-500 cursor-not-allowed"
            />
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <span>Back to Portfolio</span>
              <span>→</span>
            </Link>
          </div>
        </form>

        <p className="text-center text-xs text-slate-500 font-mono mt-6">
          Demonstrates Next.js <code className="text-cyan-400">src/app/(auth)/</code> Route Group pattern.
        </p>
      </div>
    </div>
  );
}
