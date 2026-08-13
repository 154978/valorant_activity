export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* // =========== NAVBAR =========== */}
      <nav className="flex justify-between items-center px-6 py-5 md:px-16 bg-black border-b border-zinc-800 top-0 z-50">
        <div className="text-2xl font-black tracking-widest uppercase">
          VALORANT
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-semibold uppercase text-zinc-300">
          Home / Agents / Maps / Ranked / News
        </ul>
        <a className="hidden md:inline-block bg-red-600 text-white px-6 py-2 font-bold uppercase text-sm tracking-wide hover:bg-red-700 transition">
          Play Now
        </a>
      </nav>

      {/* // =========== HERO =========== */}
      <section className="relative bg-zinc-950 px-6 md:px-16 py-24 flex flex-col md:flex-row items-center gap-12 border-b border-zinc-800">
        <div>
          <span className="inline-block bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1 border border-red-600 mb-5">
            Free To Play Tactical Shooter
          </span>
          <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-6">
            Defy The Limits
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a className="bg-red-600 text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-red-700 transition">
              Play For Free
            </a>
            <a className="border border-zinc-600 px-8 py-3 font-bold uppercase tracking-wide hover:border-red-500 transition">
              Watch Trailer
            </a>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-700 w-full h-72 md:h-96 flex items-center justify-center text-zinc-500 text-lg font-bold uppercase">
          [ Hero Key Art Placeholder ]
        </div>
      </section>

      {/* // =========== STATS STRIP =========== */}
      <section className="bg-black px-6 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-zinc-800">
        20+ Agents / 9 Maps / 8 Rank Tiers / 15M+ Active Players
      </section>

      {/* // =========== AGENTS =========== */}
      <div className="text-center max-w-xl mx-auto mb-14 px-6 pt-20">
        Choose Your Agent
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 pb-20">
        <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600 transition">
          Duelist / Controller / Sentinel
        </div>
      </div>

      {/* // =========== MAPS / ABOUT =========== */}
      <section className="px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-12 border-b border-zinc-800">
        <div className="bg-zinc-900 border border-zinc-700 w-full h-72 md:h-96 flex items-center justify-center text-zinc-500 font-bold uppercase">
          [ Map Callout Placeholder ]
        </div>
        <div>
          <h2 className="text-3xl font-black uppercase mt-2 mb-5">
            Fight Across Iconic Maps
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600 inline-block"></span>
              9 unique maps with rotating map pool
            </li>
          </ul>
        </div>
      </section>

      {/* // =========== RANKED / TESTIMONIALS =========== */}
      <section className="px-6 md:px-16 py-20 bg-red-600 text-white">
        <div className="text-center max-w-xl mx-auto mb-14">
          Climb The Ranks
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/20 rounded-lg p-8 border border-white/20">
            &quot;Every match feels different.&quot;
          </div>
        </div>
      </section>

      {/* // =========== CTA =========== */}
      <section className="px-6 md:px-16 py-20 text-center bg-zinc-950">
        <a className="inline-block bg-red-600 text-white px-10 py-3 font-bold uppercase tracking-wide hover:bg-red-700 transition">
          Download Now
        </a>
      </section>

      {/* // =========== FOOTER =========== */}
      <footer className="bg-black text-zinc-400 px-6 md:px-16 py-12 border-t border-zinc-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          Valorant / Game / Resources / Contact
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center text-sm text-zinc-600">
          (c) 2026 Riot Games, Inc. Fan-made practice project.
        </div>
      </footer>
    </div>
  );
}