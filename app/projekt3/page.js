export default function PROJEKT3() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
    <header class="flex items-center justify-between p-6 bg-background-dark sticky top-0 z-50">
      <a href="../" class="flex items-center justify-center p-2 rounded hover:bg-noir-gray transition-colors">
        <span class="material-symbols-outlined text-noir-text">arrow_back</span>
      </a>
      <div class="font-bold tracking-tighter text-xl uppercase">Cylan</div>
      <div class="w-10"></div> <!-- Spacer for symmetry -->
    </header>
    <main class="flex-1">
      <section class="px-6 pt-12 pb-20 border-b border-noir-gray">
        <h1 class="text-huge font-extrabold uppercase mb-8">
          Cylan<br />
          <span class="text-primary">Strategy</span>
        </h1>
        <p class="max-w-md text-lg font-light leading-relaxed text-slate-400">
          A premium, minimalist approach to redefining brand identity through high-contrast aesthetics and stark
          geometric structures.
        </p>
      </section>
      <section class="p-6">
        <h3 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Deliverables</h3>
        <div class="grid grid-cols-1 gap-1">
          <div
            class="flex items-center justify-between p-5 border border-noir-gray hover:bg-noir-gray transition-colors group">
            <div class="flex items-center gap-4">
              <span
                class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">edit_square</span>
              <span class="text-lg font-medium tracking-tight">Visual Identity</span>
            </div>
            <span class="material-symbols-outlined text-slate-600">north_east</span>
          </div>
          <div
            class="flex items-center justify-between p-5 border border-noir-gray hover:bg-noir-gray transition-colors group">
            <div class="flex items-center gap-4">
              <span
                class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">ads_click</span>
              <span class="text-lg font-medium tracking-tight">Brand Strategy</span>
            </div>
            <span class="material-symbols-outlined text-slate-600">north_east</span>
          </div>
          <div
            class="flex items-center justify-between p-5 border border-noir-gray hover:bg-noir-gray transition-colors group">
            <div class="flex items-center gap-4">
              <span
                class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">play_circle</span>
              <span class="text-lg font-medium tracking-tight">Motion Design</span>
            </div>
            <span class="material-symbols-outlined text-slate-600">north_east</span>
          </div>
          <div
            class="flex items-center justify-between p-5 border border-noir-gray hover:bg-noir-gray transition-colors group">
            <div class="flex items-center gap-4">
              <span
                class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">format_size</span>
              <span class="text-lg font-medium tracking-tight">Typography System</span>
            </div>
            <span class="material-symbols-outlined text-slate-600">north_east</span>
          </div>
        </div>
      </section>
      <section class="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-noir-gray/30 border-y border-noir-gray">
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-primary mb-4">The Challenge</h4>
          <p class="text-base font-light leading-relaxed text-slate-300">
            In a saturated market of vibrant gradients and soft shadows, Cylan sought to stand out by embracing the
            void. The objective was to create a visual language that communicates authority through restraint.
          </p>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-primary mb-4">The Solution</h4>
          <p class="text-base font-light leading-relaxed text-slate-300">
            A rigorous grid system paired with a strict monochromatic palette. Every element serves a functional
            purpose, stripping away the decorative to reveal the structural core of the brand.
          </p>
        </div>
      </section>
      <section class="p-6">
        <div class="aspect-[4/5] w-full bg-noir-gray overflow-hidden">
          <img class="w-full h-full object-cover grayscale brightness-75 contrast-125"
            data-alt="Abstract black and white architectural geometric shadows"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCshiwssqRtm_-tK7FQ7KTdgVFwNinLaGoaM9H5i24PsVXLhF-sUHCMvqsDdzPAUfis6cby7JO1WodpV8fxszIERBTEzK9iDmei1hoQvoYiW48O5WMzQVpLGWOga_LHEOM9KdRTYXhLDxeBoxz4U_w5PbDePEqbP90v3viwuGQVuAxW2SAngnDQTyIzGrPjMKKAlkLDsO2tijkwsnnS84WgA2gg7KvzX4xJ_kU1tp-DYMYTNvPsnaOlx4oDyaitwtrTkpcuN0MAEQ" />
        </div>
      </section>
    </main>
    <footer class="p-6 pt-24 pb-12 border-t border-noir-gray overflow-hidden">
      <h2 class="text-huge font-black uppercase text-noir-gray select-none opacity-50">CYLAN</h2>
      <div class="mt-12 flex flex-col gap-8">
        <div class="flex justify-between items-end">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Next Project</p>
            <h3 class="text-3xl font-bold uppercase">Luminal Art</h3>
          </div>
          <button class="bg-primary text-white p-4 rounded-full">
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div
          class="flex justify-between text-[10px] uppercase tracking-widest text-slate-600 border-t border-noir-gray pt-6">
          <span>© 2024 Cylan Studio</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  </div>
` }} />
  );
}