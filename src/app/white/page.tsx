import WhiteView from "@/components/WhiteView";
import Link from "next/link";

export const metadata = {
  title: "Light Theme | S. M. Hafiz F. Syed",
  description: "Web & Mobile Developer Portfolio | White Theme",
};

export default function WhitePage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white text-xs font-mono shadow-xl hover:bg-slate-800 transition-all border border-slate-700"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Hub</span>
        </Link>
      </div>
      <WhiteView />
    </div>
  );
}
