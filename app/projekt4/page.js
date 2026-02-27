export default function PROJEKT4() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
    <!-- Background Decorative Glows -->
    <div class="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full -z-10"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-rose/10 blur-[120px] rounded-full -z-10">
    </div>
    <div
        class="flex flex-col min-h-screen max-w-md mx-auto relative border-x border-slate-200 dark:border-slate-800 bg-white/5 backdrop-blur-sm">
        <!-- Header -->
        <header class="flex items-center justify-between p-6 sticky top-0 z-20 backdrop-blur-md">
            <a href="../"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/10 border border-white/10 text-slate-100">
                <span class="material-symbols-outlined">arrow_back</span>
            </a>
            <div class="flex items-center gap-2">
                <div
                    class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-rose flex items-center justify-center">
                    <span class="material-symbols-outlined text-white text-lg">category</span>
                </div>
                <span class="font-bold tracking-tight">App UI</span>
            </div>
            <button
                class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/10 border border-white/10 text-slate-100">
                <span class="material-symbols-outlined">share</span>
            </button>
        </header>
        <!-- Hero Section -->
        <main class="flex-1 px-6 pb-24">
            <div class="relative mt-4 mb-8">
                <div
                    class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                    <div class="relative z-10 flex flex-col items-center text-center py-6">
                        <span class="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Case Study
                            2024</span>
                        <h1
                            class="text-4xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            App UI - Product Design
                        </h1>
                        <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
                            A premium exploration of glassmorphism and depth in modern mobile interfaces.
                        </p>
                    </div>
                    <!-- Decorative element -->
                    <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/30 blur-2xl rounded-full"></div>
                </div>
            </div>
            <!-- Bento Grid -->
            <h2 class="text-lg font-bold mb-4 px-1">Design System</h2>
            <div class="grid grid-cols-2 gap-4">
                <!-- Large Component Preview -->
                <div
                    class="col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-medium text-slate-300">Interaction Logic</span>
                        <span class="material-symbols-outlined text-primary text-xl">gesture</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div
                            class="h-12 w-full bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center text-xs font-semibold">
                            Active State</div>
                        <div
                            class="h-12 w-full bg-slate-100/5 border border-white/10 rounded-lg flex items-center justify-center text-xs font-semibold">
                            Default State</div>
                    </div>
                </div>
                <!-- Toggles Card -->
                <div
                    class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 aspect-square flex flex-col justify-between group">
                    <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary text-lg">toggle_on</span>
                    </div>
                    <div>
                        <p class="text-sm font-semibold mb-1">Toggles</p>
                        <p class="text-xs text-slate-500">Switch components</p>
                    </div>
                </div>
                <!-- Buttons Card -->
                <div
                    class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 aspect-square flex flex-col justify-between">
                    <div class="w-8 h-8 rounded-lg bg-accent-rose/10 flex items-center justify-center">
                        <span class="material-symbols-outlined text-accent-rose text-lg">smart_button</span>
                    </div>
                    <div>
                        <p class="text-sm font-semibold mb-1">Buttons</p>
                        <p class="text-xs text-slate-500">CTA hierarchy</p>
                    </div>
                </div>
                <!-- Charts Card -->
                <div
                    class="col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 flex items-center justify-between">
                    <div class="flex flex-col">
                        <p class="text-sm font-semibold mb-1">Data Charts</p>
                        <p class="text-xs text-slate-500">Visualizing insights</p>
                    </div>
                    <div class="flex items-end gap-1 h-10">
                        <div class="w-2 bg-primary/40 h-1/2 rounded-full"></div>
                        <div class="w-2 bg-primary/60 h-3/4 rounded-full"></div>
                        <div class="w-2 bg-primary h-full rounded-full"></div>
                        <div class="w-2 bg-primary/50 h-2/3 rounded-full"></div>
                    </div>
                </div>
                <!-- Inputs Card -->
                <div
                    class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 aspect-square flex flex-col justify-between">
                    <div class="w-8 h-8 rounded-lg bg-indigo-400/10 flex items-center justify-center">
                        <span class="material-symbols-outlined text-indigo-400 text-lg">edit_square</span>
                    </div>
                    <div>
                        <p class="text-sm font-semibold mb-1">Inputs</p>
                        <p class="text-xs text-slate-500">Form fields</p>
                    </div>
                </div>
                <!-- Icons Card -->
                <div
                    class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 aspect-square flex flex-col justify-between">
                    <div class="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                        <span class="material-symbols-outlined text-emerald-400 text-lg">grid_view</span>
                    </div>
                    <div>
                        <p class="text-sm font-semibold mb-1">Icons</p>
                        <p class="text-xs text-slate-500">Symbol library</p>
                    </div>
                </div>
            </div>
        </main>
        <!-- Bottom Navigation Bar -->
        <nav class="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
            <div
                class="mx-4 mb-6 px-6 py-3 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-full flex justify-between items-center shadow-2xl">
                <a class="flex flex-col items-center gap-1 text-primary" href="#">
                    <span class="material-symbols-outlined fill-1">home</span>
                </a>
                <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
                    <span class="material-symbols-outlined">explore</span>
                </a>
                <div class="relative -top-6">
                    <div
                        class="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background-dark">
                        <span class="material-symbols-outlined text-white text-3xl">add</span>
                    </div>
                </div>
                <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
                    <span class="material-symbols-outlined">bar_chart</span>
                </a>
                <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
                    <span class="material-symbols-outlined">person</span>
                </a>
            </div>
        </nav>
    </div>
` }} />
  );
}